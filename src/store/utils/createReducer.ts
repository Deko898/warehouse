export interface PartialReducer<T, A> {
    (state: T, action: A): T;
}

export function createReducer<T, A extends { type: string }>(
    initialState: T,
    handlers: { [type: string]: PartialReducer<T, A> }
) {
    return function (state: T = initialState, action: A): T {
        const handler = handlers[action && action.type];
        if (!handler) {
            return state;
        }
        return handler(state, action);
    };
}