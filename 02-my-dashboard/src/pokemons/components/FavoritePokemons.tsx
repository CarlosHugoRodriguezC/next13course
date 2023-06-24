"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState(favoritePokemons);

  


  // JSX
  if (pokemons.length === 0) {
    return <NotFavorites />;
  }

  return <PokemonGrid pokemons={pokemons} />;
};

const NotFavorites = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <IoHeartOutline className="text-red-500 text-4xl" />
      <h2 className="text-2xl text-gray-600 font-bold">No Favorites Yet</h2>
    </div>
  );
};
