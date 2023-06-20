import { ComplexPokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const pokemon = await getPokemon(params.id);

    return {
      title: `Pokemon #${pokemon.id} | ${pokemon.name}`,
    };
  } catch (error) {
    return {
      title: "Pokemon not found",
    };
  }
}

const getPokemon = async (id: string): Promise<ComplexPokemon> => {
  try {
    const pokemon: ComplexPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      {
        //   cache: "force-cache", // TODO: change this
      }
    ).then((res) => res.json());

    return pokemon;
  } catch (error) {
    throw notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div className="relative my-5 flex flex-col items-center bg-white bg-clip-border shadow-md shadow-gray-200 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
      <div className="w-full mt-2 mb-8">
        <h4 className="px-2 text-xl font-bold text-center text-navy-700 dark:text-white capitalize">
          {pokemon.name}
        </h4>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          width={200}
          height={200}
          className="mx-auto"
        />
        <p className="px-2 mt-2 text-base text-gray-600">
          {pokemon.moves.map((move) => move.move.name).join(", ")}
        </p>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Types</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Weight</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {pokemon.weight}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Regular sprites</p>
          <div className="grid grid-cols-2">
            <div className="col-span-auto">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div className="col-span-auto">
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Shiny Sprites</p>

          <div className="grid grid-cols-2">
            <div className="col-span-auto">
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div className="col-span-auto">
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
