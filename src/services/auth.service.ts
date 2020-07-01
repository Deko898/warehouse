import { ILoginDto, IUser } from '../models';
import { USER_MOCK } from '../mock/users.mock';

const login = (loginDto: ILoginDto): Promise<IUser> => new Promise((res, rej) => setTimeout(() => {
    const authUser = USER_MOCK.find(u => u.email.toLowerCase() === loginDto.email.toLowerCase() && u.password.toLowerCase() === loginDto.password.toLowerCase());
    if (authUser) {
        return res(authUser.userDetails)
    }
    rej('Invaild email or password')
}, 300));

const logout = (): Promise<void> => new Promise((res, rej) => setTimeout(() => res(), 300));

export const authService = {
    login,
    logout
}