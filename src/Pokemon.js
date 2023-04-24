import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "./redux/actions";

const Pokemon = () => {
  const dispatch = useDispatch();
  let { pokemonId } = useParams();
  const pokemon = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon(parseInt(pokemonId)));
  }, []);

  return <div>{pokemon.name}</div>;
};

export default Pokemon;
