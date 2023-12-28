"use client";
import { useEffect, type ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
   children: ReactNode;
}
export const Providers = ({ children }: Props) => {
   useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem("favorites") ?? "{}");

      store.dispatch(setFavoritePokemons(favorites));
   }, []);

   return <Provider store={store}>{children}</Provider>;
};
