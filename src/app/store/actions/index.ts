import useExampleActions from "./example";
import {useDispatch} from "react-redux";
import {store} from "../index";


const useActions = () => {
  const dispatch = useDispatch<typeof store.dispatch>()

  return {
    dispatch,
    useExampleActions
  }
}

export default useActions;