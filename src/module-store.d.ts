declare module './app/store' {
    import {persistor, store} from "./app/store";
    export {
        persistor,
        store
    }
}

declare module '../types/store' {
    import { useTypedDispatch } from "../types/store";
    export {
        useTypedDispatch
    }
}