"use client";

import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const isFavorite = useAppSelector((state) =>
    Boolean(state.pokemons[pokemon.id])
  );

  const dispatch = useAppDispatch();

  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className=" relative p-4 z-0 rounded-md shadow-md border-gray-200 border">
      <button
        className="absolute right-4 top-4 text-2xl"
        onClick={onToggleFavorite}
      >
        {isFavorite ? (
          <IoHeart className="text-red-500" />
        ) : (
          <IoHeartOutline className="text-red-500" />
        )}
      </button>
      <Image
        className="w-32 h-32 mx-auto"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        width={128}
        height={128}
      />
      <h2 className="text-xl font-semibold capitalize text-center">
        {pokemon.name}
      </h2>
      <span className="text-gray-300 absolute -z-[1] text-5xl top-4  font-bold">
        {pokemon.id}
      </span>
      <Link
        className=" rounded-full border-gray-900 bg-gray-900 border px-2 py-1 text-white w-full flex items-center justify-center font-semibold hover:bg-transparent hover:text-gray-900 transition duration-300 ease-in-out"
        href={`/dashboard/pokemons/${pokemon.name}`}
      >
        ver mas...
      </Link>
    </div>
  );
};
