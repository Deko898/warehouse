import { createReducer } from '../../utils/createReducer';
import { IOrderDetailsState, initialState } from './state';
import { Actions } from './actions.interface';
import { Types } from './types';

export default createReducer<IOrderDetailsState, Actions>(initialState, {
    [Types.REQUEST_ORDER_DETAILS]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [Types.REQUEST_ORDER_DETAILS_SUCCESS]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [Types.REQUEST_ORDER_DETAILS_FAILURE]: (state, action) => ({
        ...state,
        ...action.payload
    })
})