import React, { useContext, Dispatch, SetStateAction } from 'react';

function useHook<T>(passedContext) {
  const context: [T, Dispatch<SetStateAction<T>>] = useContext(passedContext);
  if (!context) {
    throw new Error(`Use Statement must be used within a Provider`);
  }
  return context;
}

function ContextValue<T>(initialState: T) {
  // initialize state hook
  const [state, setState]: [T, Dispatch<SetStateAction<T>>] = React.useState<T>(
    initialState
  );

  // prevent wasteful state updates
  const value = React.useMemo(() => [state, setState], [state]);
  return value;
}
export { useHook, ContextValue };
