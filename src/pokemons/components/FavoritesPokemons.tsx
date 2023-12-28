"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
   const pokemonsFavorites = useAppSelector((state) =>
      Object.values(state.pokemons.favorites)
   );

   // const [pokemons, setPokemons] = useState(pokemonsFavorites);

   // useEffect(() => {
   //    setPokemons(pokemonsFavorites);
   // }, [pokemonsFavorites]);

   return (
      <>
         {pokemonsFavorites.length > 0 ? (
            <PokemonGrid pokemons={pokemonsFavorites} />
         ) : (
            <NoFavorites />
         )}
      </>
   );
};

export const NoFavorites = () => {
   return (
      <div className="flex flex-col h-[50vh] items-center justify-center">
         <IoHeartOutline size={100} className="text-red-500" />
         <span>No hay favoritos</span>
      </div>
   );
};
