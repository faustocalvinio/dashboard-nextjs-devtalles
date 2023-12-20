import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import pokemonsSlice from './pokemons/pokemons';

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    pokemons:pokemonsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
