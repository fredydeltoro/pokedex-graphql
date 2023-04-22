import './App.css';
import Autocomplete from './Autocomplete'
import Pokemon from './Pokemon';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Autocomplete />} />
          <Route path='/pokemons/:pokemonId' element={<Pokemon />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
