export const setPokemon = (pokemon) => ({
  type: "pokemon/set",
  payload: pokemon,
});

const pokeApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "pikachu",
        id: 1,
      });
    }, 300);
  });

export const fetchPokemon = () => {
  return async (dispatch) => {
    const pokemon = await pokeApi();
    dispatch(setPokemon(pokemon));
  };
};
