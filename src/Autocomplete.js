import { useState } from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_GEN_3 = gql`
  query getGen3($pokemon: String) {
    pokemon_v2_pokemonsprites(
      order_by: { id: asc }
      where: {
        pokemon_v2_pokemon: {
          name: {
            _iregex: $pokemon
          }
        }
      }
    ) {
      pokemon_v2_pokemon {
        name
      }
      sprites
    }
  }
`;

function debounce(func, timeout = 100) {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }

}

const Autocomplete = () => {

  const [pokemon, setPokemon] = useState(' ')
  const { loading, error, data } = useQuery(GET_GEN_3, {
    variables: { pokemon }
  });

  const handleInput = debounce(e => {
    const value = e.target.value
    
    if (value.length) {
      setPokemon(e.target.value.trim())
    } else {
      setPokemon(' ')
    }
  }, 300)

  const merge = (result) => ({
    name: result['pokemon_v2_pokemon'].name,
    sprites: JSON.parse(result.sprites)
  })
   


   
   return (
    <div className='App-autocomplete'>
      <div id="autocomplete">
        <div className="input-box">
          <div className="input">
            <input
              type="text"
              id="search-input"
              placeholder="Search"
              onChange={(e) => handleInput(e)} />
          </div>
         </div>
         {
           data && (
            <div id="suggestions">
              <ul>
                 {
                   data['pokemon_v2_pokemonsprites'].map(merge).map((p) => (
                     <li>
                       <div>{p.name }</div>
                       <div>
                         <img src={p.sprites.front_default} alt="no image" />
                       </div>
                     </li>
                   ))
                 }
              </ul>
            </div> 
           )
         }
      </div>
    </div>
  )
}

export default Autocomplete