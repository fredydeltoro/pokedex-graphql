import React from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  let { pokemonId } = useParams();

  console.log("a ver ====>", pokemonId);

  return <div>Pokemon</div>;
};

export default Pokemon;
