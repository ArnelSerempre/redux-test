
import {useSelector} from "react-redux";
import useActions from "../app/store/actions";
import useSelectors from "../app/store/selectors";
import {AppDispatch} from "../app/store/types/store";

const useApp = () => {
    // Actions
    const {dispatch, useExampleActions} = useActions();
    const { actSetText } = useExampleActions();

    // Selectors
    const {useExampleSelectors} = useSelectors();
    const {textSelector} = useExampleSelectors();
    const text = useSelector(textSelector);

    const handleClick = (text: string) => {
      dispatch(actSetText(text))
    }

    return {
        text,
        handleClick
    }
}

export default useApp;