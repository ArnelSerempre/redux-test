import createReducer from "../createReducer";
import {EXAMPLE_TEXT} from "../../types";
import {PayloadAction} from "@reduxjs/toolkit";

const useExampleReducers = () => {
    const text = createReducer({
        text: ""
    },{
        [EXAMPLE_TEXT](state: any, action: PayloadAction<string>) {
            return {
                ...state,
                text: action.payload
            }
        }
    });

    return {
        text
    }
}

export default useExampleReducers;