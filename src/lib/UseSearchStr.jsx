import { useEffect, useState } from 'react';

const usePresistedState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persisteddValue = sessionStorage.getItem(sessionStorageKey);

    return persisteddValue ? JSON.parse(persisteddValue) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);

  return [state, setState];
};

export const useSearchStr = () => {
  return usePresistedState('', 'searchString');
};
