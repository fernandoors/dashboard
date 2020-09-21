import { IStoreTypes } from "./reducers";

export const loadState = (): IStoreTypes | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error get state from localStorage', err);
    return undefined;
  }
};

export const saveState = (state: IStoreTypes): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage', err);
  }
};
