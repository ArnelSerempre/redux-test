export default function createReducer(initialState: any, handler: any) {
    return function reducer(state: any = initialState, action: any) : void{
        if(handler.hasOwnProperty(action.type)){
            return handler[action.type](state, action);
        }

        return state;
    }
}