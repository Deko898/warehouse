import { createReducer } from '../../utils/createReducer';
import { Actions } from './actions.interface';
import { Types } from './types';
import { IAuthState, initialState } from './state';

export default createReducer<IAuthState, Actions>(initialState, {
    [Types.REQUEST_LOGIN]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [Types.REQUEST_LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [Types.REQUEST_LOGIN_FAILURE]: (state, action) => ({
        ...state,
        ...action.payload
    })
})