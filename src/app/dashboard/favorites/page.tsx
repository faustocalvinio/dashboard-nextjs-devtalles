import { FavoritesPokemons } from "@/pokemons/components/FavoritesPokemons";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
   title: "Favorites-  Listado de Pokémons",
   description: "Listado de Pokémons favoritos",
};

export default async function PokemonsPage() {
   return (
      <div className="flex flex-col">
         <span className="text-5xl my-2">
            Listado de Pokémons favs 
            <small className="text-yellow-800"> global state</small>
         </span>
         <FavoritesPokemons />
      </div>
   );
}
