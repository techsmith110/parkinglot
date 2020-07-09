import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { MatProgressSpinnerModule, MatFormFieldModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth.module';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    AuthModule
  ]
})
export class SignupModule { }
