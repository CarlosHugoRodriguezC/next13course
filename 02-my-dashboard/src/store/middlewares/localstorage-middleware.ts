import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === "pokemons/toggleFavorite") {
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.getState().pokemons.favorites)
      );
      return;
    }
  };
};
