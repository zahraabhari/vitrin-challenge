export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const prevState = store.getState();
    const result = next(action);
    const nextState = store.getState();

    if (prevState.theme.token !== nextState.theme) {
      localStorage.setItem("theme", nextState.theme);
    }
    return result;
  };

export default [localStorageMiddleware];
