import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "./redux/actions";
import { TitleContext } from "./context";

const Pokemon = () => {
  const context = useContext(TitleContext);
  const dispatch = useDispatch();
  let { pokemonId } = useParams();
  const pokemon = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon(parseInt(pokemonId)));
  }, []);

  useEffect(() => {
    context.setTitle(pokemon?.name);
  }, [pokemon]);

  return <div> <Link to="/">Back</Link> </div>;
};

export default Pokemon;
