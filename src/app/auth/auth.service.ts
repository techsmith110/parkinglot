import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject, throwError } from "rxjs";

import { environment } from "../../environments/environment";
import { AuthData, USER } from "./auth-data.model";
import { ErrorService } from 'app/error/error.service';
import { tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const BACKEND_URL = environment.apiUrl + '/users/';

@Injectable({ providedIn: "root" })
export class AuthService {
    private isAuthenticated;
    private token: string;
    private tokenTimer: any;
    private userId: string;
    private authStatusListener = new Subject<boolean>();
    private user: USER;

    private jwtHelper: JwtHelperService = new JwtHelperService();
    constructor(private http: HttpClient, private router: Router, private errorService: ErrorService) { }

    getToken() {
        return this.token || localStorage.getItem('token');
    }

    getIsAuth() {
        return !this.jwtHelper.isTokenExpired(this.getToken());
    }

    getUserId() {
        return this.userId || localStorage.getItem('userId');
    }
    updateToken(token) {
        if (token) {
            localStorage.setItem('token', token);
            this.token = token;
            // this.setAuthTimer(3600);
        }
    }
    getUser(): USER {
        let user = localStorage.getItem('user');
        if (user && user.length) {
            user = JSON.parse(user);
        }
        return (this.user as any || user);
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(email: string, password: string) {
        const authData: AuthData = { email, password };
        this.http.post(BACKEND_URL + "signup", authData).subscribe(
            () => {
                this.router.navigate(["/newUser"]);
            },
            error => {
                this.authStatusListener.next(false);
            }
        );
    }

    login(email: string, password: string) {
        const authData: AuthData = { email, password };
        return this.http
            .post<{ status: string; token: any; data: { user: USER }, expires: number }>(
                BACKEND_URL + "login",
                authData
            )
            .pipe(
                tap(
                    resp => {
                        console.log(resp);
                        const token = resp.token;
                        this.token = token;
                        if (token) {
                            const expiresInDuration = resp.expires;
                            this.setAuthTimer(expiresInDuration);
                            this.isAuthenticated = true;
                            this.userId = resp.data.user._id;
                            this.user = resp.data.user;
                            this.user.accessToken = resp.token;
                            this.authStatusListener.next(true);
                            const now = new Date();
                            const expirationDate = new Date(
                                now.getTime() + expiresInDuration * 1000
                            );
                            this.saveAuthData(token, expirationDate, this.userId, this.user);
                            location.href = "dashboard";
                        }
                    }),
                catchError(error => {
                    console.log(error);
                    this.authStatusListener.next(error);
                    this.errorService.throwError(error.error.responseMessage[0]);
                    return throwError(error);
                })
            );
    }
    forgotPassword(username) {
        return this.http.post(`${BACKEND_URL}reset/password?user_name=${username}`, {});
    }
    confirmPassword(data) {
        delete data.confirmPassword;
        return this.http.post(`${BACKEND_URL}/confirm/reset/password`, data);
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            // this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }

    logout() {
        this.http
            .get<{ token: string; username: string }>(
                BACKEND_URL + "logout", {}
            ).subscribe(data => {
                this.token = null;
                this.isAuthenticated = false;
                this.authStatusListener.next(false);
                this.userId = null;
                clearTimeout(this.tokenTimer);
                this.clearAuthData();
                this.router.navigate(["/login"]);
            }, err => {

            });

    }

    private setAuthTimer(duration: number) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }

    private saveAuthData(token: string, expirationDate: Date, userId: string, userData: USER) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
        localStorage.setItem("user", JSON.stringify(userData));
        this.loadUserSettings(userData);
    }
    private loadUserSettings(user: USER) {
        console.log('logging user', user);
    }
    private clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
        localStorage.removeItem("user");
    }

    private getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("userId");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token,
            expirationDate: new Date(expirationDate),
            userId
        };
    }
}
