import { gql } from "@apollo/client";
import client from "../client";

export const setPokemon = (pokemon) => ({
  type: "pokemon/set",
  payload: pokemon,
});

const GET_GEN_3 = gql`
  query GetPokemon($pokemonId: Int!) {
    pokemon_v2_pokemon_by_pk(id: $pokemonId) {
      base_experience
      height
      id
      is_default
      name
      order
      pokemon_species_id
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const fetchPokemon = (pokemonId) => {
  return async (dispatch) => {
    const pokemon = await client.query({
      query: GET_GEN_3,
      variables: { pokemonId },
    });

    dispatch(setPokemon(pokemon.data.pokemon_v2_pokemon_by_pk));
  };
};
