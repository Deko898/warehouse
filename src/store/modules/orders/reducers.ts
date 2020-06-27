import { createReducer } from '../../utils/createReducer';
import { IOrderState, initialState } from './state';
import { Actions } from './actions.interface';
import { Types } from './types';

export default createReducer<IOrderState, Actions>(initialState, {
    [Types.REQUEST_ORDERS]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [Types.REQUEST_ORDERS_SUCCESS]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [Types.REQUEST_ORDERS_FAILURE]: (state, action) => ({
        ...state,
        ...action.payload
    })
})