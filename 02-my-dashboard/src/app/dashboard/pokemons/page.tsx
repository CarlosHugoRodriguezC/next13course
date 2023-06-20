import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/pokemons";

const getPokemons = async ({
  limit = 20,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  return data.results.map((pokemon) => ({
    ...pokemon,
    id: pokemon.url.split("/").at(-2) ?? "",
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons({ limit: 151 });

  return <PokemonGrid pokemons={pokemons} />;
}
