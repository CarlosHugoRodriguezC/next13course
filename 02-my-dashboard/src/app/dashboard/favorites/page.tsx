import { FavoritePokemons } from "@/pokemons";


export const metadata = {
  title: "Favorite Pokemons",
  description: "Favorite Pokemons",
};  

export default async function FavoritePokemonsPage() {
  return (
    <>
      <span className="text-5xl my-2">
        Favorite Pokemons <small className="text-blue-500">Global state</small>
      </span>
      <FavoritePokemons />
    </>
  );
}
