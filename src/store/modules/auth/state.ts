import { IUser } from "../../../models";

export interface IAuthState {
    isLoading: boolean;
    user: IUser;
    error: any;
}

export const initialState: IAuthState = {
    isLoading: false,
    user: null,
    error: null
}