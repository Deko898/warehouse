export interface ILoginDto {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface IUser {
    fullName: string;
    jobTitle: string;
    email: string;
    avatar: string;
}