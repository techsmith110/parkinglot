import { Observable } from 'rxjs';
export const BASIC_FILTER = {
    limit: 30,
    skip: 0,
    sort: { created: -1 }
}
export interface SERVER_RESPONSE {
    response: any;
    responseMessage: string[];
    error: any | boolean;
    totalPages: number;
    totalRecords: number;
}

export interface ROLE {
    id: number;
    roleName: string;
    client: CLIENT;
    moduleName: string
}

export interface CLIENT {
    id: number;
    clientName: string;
}

export interface COUNTRY {
    code: string;
    name: string;
}

export interface COMPANY {
    id: string;
    companyName: string;
    websiteUrl: string;
    deleted: boolean;
}

export interface DEPARTMENT {
    id: string;
    departmentName: string;
    deleted: boolean;
}

export interface DESIGNATION {
    id: string;
    departmentId: string;
    designationName: string;
    deleted: boolean;
}

export interface REGION {
    id: string;
    countryName: string;
    cityNames: string[];
    regionName: string;
    code: string;
    deleted: boolean;
}

export interface OFFICE {
    id: string;
    companyId: string;
    regionId: string;
    cityName: string;
    officeType: string;
    officeName: string;
    phoneNo: string;
    fax: string;
    address: string;
    machineName: string;
    machineIP: string;
    deleted: boolean;
}

export interface CONFIRM_MODAL_DATA {
    title: string;
    content: string;
    confirmText: string;
    cancelText: string;
}

export interface LEAVE_TYPE {
    id: string;
    name: string;
}

export interface LEAVE_POLICY {
    id: string;
    leaveType: LEAVE_TYPE;
    employmentStatus: EMPLOYEE_TYPE;
    noOfLeaves: string;
}

export interface LATE_REASON {
    id: string;
    name: string;
}

export interface QUALIFICATION {
    id: string;
    qualificationLevel: string;
    qualificationName: string;
    majorSubject: string;
    qualificationType: string[];
}

export interface QUALIFICATION_TYPE {
    id: string;
    qualificationLevel: string;
    qualificationName: string;
    majorSubject: string;
    qualificationType: number;
}

export interface EMPLOYEE_TYPE {
    id: string;
    name: string;
}

export interface SHIFT {
    id: string;
    shiftName: string;
    graceTimeApply: number;
    overTimeApply: number;
    shiftStart: string;
    shiftEnd: string;
    noHolidayApply: boolean;
    workingDaysList: WORKING_DAYS[];
}

export interface WORKING_DAYS {
    id: string;
    name: string;
}

export interface HOLIDAY_DETAIL {
    id: string;
    holidayName: string;
    holidayDate;
    holidayCategory: string;
    description: string
}

export interface BENEFIT_ASSET {
    id: string;
    benefitAsset: string;
    description: string;
    model: string;
    benefitAssetType: number;
}

export interface DEDUCTION_SETUP {
    id: string;
    employmentStatusId: number;
    thresholdLateDeduction: number;
    maxLateRemarks: number;
    effectiveDate: string
}

interface ShiftSetup {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    shiftName: string;
    shiftStart: string;
    shiftEnd: string;
    graceTimeApply: number;
    overTimeApply: number;
    noHolidayApply: boolean;
    workingDaysList: any[];
}

interface EmployeeStatus {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    name: string;
}

interface EmployeePreviousExperience {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    companyName: string;
    designation: string;
    joiningDate: string;
    endingDate: string;
    salary: number;
    otherBenefitDetail: string;
}

interface EmployeeFamilyInfo {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    name: string;
    gender: number;
    dob: string;
    relation: string;
    bloodGroup: number;
}

interface EmployeeQualification {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    startDate: string;
    endDate: string;
    qualificationId: number;
    instituteName: string;
    cgpaGrade: string;
    qualification: Qualification;
}

interface Qualification {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    qualificationLevel: string;
    qualificationName: string;
    majorSubject: string;
    qualificationType: number;
}

interface EmployeeBenefitAsset {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    amount: number;
    effectiveDate: string;
    benefitAssetId: number;
    benefitAsset: BenefitAsset;
}

interface BenefitAsset {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    benefitAsset: string;
    description: string;
    model: string;
    benefitAssetType: number;
}
export interface EMPLOYEE {
    id: number;
    createdDate: string;
    createdBy: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    isDeleted: boolean;
    firstName: string;
    middleName: string;
    lastName: string;
    title: number;
    maritalStatus: number;
    referenceOf: number;
    referenceName: string;
    cnicNo: string;
    dob: string;
    religion: number;
    phoneNo: string;
    cellNo: string;
    officePhone: string;
    email: string;
    officeEmail: string;
    permanentAddress: string;
    employeeBenefitAssets: EmployeeBenefitAsset[];
    employeeQualifications: EmployeeQualification[];
    employeeFamilyInfos: EmployeeFamilyInfo[];
    employeePreviousExperiences: EmployeePreviousExperience[];
    employeeStatusId: number;
    passportNo: string;
    passportExpiry: string;
    drivingLicense: string;
    drivingLicenseExpiry: string;
    emergencyName: string;
    emergencyPhoneNo: string;
    bloodGroup: number;
    officeId: string;
    departmentId: string;
    designationId: string;
    companyId: string;
    cityCode?: any;
    officeExtension: string;
    dateOfHire: string;
    dateOfConfirmation: string;
    shiftEffectiveDate?: any;
    jobDescription: string;
    isPortalActive: boolean;
    temporaryAddress: string;
    employeeStatus: EmployeeStatus;
    shiftSetup: ShiftSetup;
    shiftSetupId: number;
    reportTo?: any;
    employeeMachineId: number;
    imageUrl: string;
    cognitoRolesDtos?: any;
    isActive: boolean;
}

export interface SetDependents {
    setDependencies(): void
}