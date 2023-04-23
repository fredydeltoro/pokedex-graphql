import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "./actions";

const Pokemon = () => {
  const dispatch = useDispatch();
  let { pokemonId } = useParams();
  const pokemon = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return <div>Pokemon</div>;
};

export default Pokemon;
