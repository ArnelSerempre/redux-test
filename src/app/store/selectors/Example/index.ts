import useCreateSelector from "../createSelector";

const useExampleSelectors = () => {
  const {createSelector} = useCreateSelector();

  const textSelector = createSelector(
      (state: any) => state.text,
      (text) => text.text
  );

  return {
    textSelector
  }
}

export default useExampleSelectors;