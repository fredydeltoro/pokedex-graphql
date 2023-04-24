import { useState, useContext, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { TitleContext } from "./context";
import { Link } from "react-router-dom";

const GET_GEN_3 = gql`
  query getGen3($pokemon: String) {
    pokemon_v2_pokemon(
      order_by: { id: asc }
      where: { name: { _iregex: $pokemon } }
      limit: 20
    ) {
      name
      id
    }
  }
`;

function debounce(func, timeout = 100) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const Autocomplete = () => {
  const context = useContext(TitleContext);
  const [pokemon, setPokemon] = useState(" ");
  const { loading, error, data } = useQuery(GET_GEN_3, {
    variables: { pokemon },
  });

  const handleFocus = () => {
    setPokemon("");
  };

  const handleInput = debounce((e) => {
    const value = e.target.value;

    if (value.length) {
      setPokemon(e.target.value.trim());
    } else {
      setPokemon(" ");
    }
  }, 300);

  useEffect(() => {
    context.setTitle("");
  }, []);

  return (
    <div className="App-autocomplete">
      <div id="autocomplete">
        <div className="input-box">
          <div className="input">
            <input
              type="text"
              id="search-input"
              placeholder="Search"
              onChange={(e) => handleInput(e)}
              onFocus={() => handleFocus()}
              autoComplete="off"
            />
          </div>
        </div>
        {data && (
          <div id="suggestions">
            <ul>
              {data["pokemon_v2_pokemon"].map((p) => (
                <li key={p.id}>
                  <Link to={`/pokemons/${p.id}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
