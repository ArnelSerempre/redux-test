import {createSelectorCreator, defaultMemoize} from "reselect";
// @ts-ignore
import { isEqual } from "lodash";

const useCreateSelector = () => {
    const createSelector = createSelectorCreator(
        defaultMemoize,
        isEqual
    );

    return {
        createSelector
    }
}

export default useCreateSelector;