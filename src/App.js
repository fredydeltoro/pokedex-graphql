import { useState } from 'react';
import './App.css';
import Autocomplete from './Autocomplete'
import Pokemon from './Pokemon';
import { Routes, Route } from "react-router-dom"
import { TitleContext } from './context';

function App() {
  const [title, setTitle] = useState('')
  return (
      <TitleContext.Provider value={{title, setTitle}}>
        <div className="App">
          <header className="App-header">
            <h1>Pokedex {title?.length ? `- ${title}`: ''}</h1>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Autocomplete />} />
              <Route path='/pokemons/:pokemonId' element={<Pokemon />} />
            </Routes>
          </main>
        </div>
      </TitleContext.Provider>
  );
}

export default App;
