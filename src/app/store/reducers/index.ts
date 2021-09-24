import { combineReducers } from "@reduxjs/toolkit";
import useExampleReducers from "./example";

const useCombineReducers = () => {
    const {text} = useExampleReducers();

    return combineReducers(
        Object.assign({
            text
        })
    )
}

export default useCombineReducers;