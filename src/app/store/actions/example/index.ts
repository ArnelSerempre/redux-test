import { AppDispatch } from "../../../store";
import {EXAMPLE_TEXT} from "../../types";

const useExampleActions = () => {
    const actSetText = (text: string) => async (dispatch: any) => {
        try {
            dispatch({
                type: EXAMPLE_TEXT,
                payload: text
            });
        } catch (e) {
            console.log(e)
        }
    }

    return {
        actSetText
    }
}

export default useExampleActions;