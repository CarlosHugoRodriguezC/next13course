import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import PokemonsReducer from "./pokemons/pokemonsSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    pokemons: PokemonsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
