// Third-Party dependencies
import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';
import { IAppState } from './app-state.interface';
import { ordersSagas } from './modules/orders/sagas';
import { orderDetailsSagas } from './modules/order-details/sagas';
import ordersReducers from './modules/orders/reducers';
import orderDetailsReducers from './modules/order-details/reducers';

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    ordersState: ordersReducers,
    orderDetailsState: orderDetailsReducers
});

const sagaMiddleware = createSagaMiddleware();


function* rootSaga() {
    yield all([
        ...ordersSagas,
        ...orderDetailsSagas
    ])
}

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
    const store = createStore(
        rootReducer,
        undefined,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

