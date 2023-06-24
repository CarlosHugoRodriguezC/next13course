import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
