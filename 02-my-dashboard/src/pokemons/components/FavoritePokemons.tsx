"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  
  
  // JSX
  if (favoritePokemons.length === 0) {
    return <NotFavorites />;
  }

  return <PokemonGrid pokemons={favoritePokemons} />;
};

const NotFavorites = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <IoHeartOutline className="text-red-500 text-4xl" />
      <h2 className="text-2xl text-gray-600 font-bold">No Favorites Yet</h2>
    </div>
  );
};
