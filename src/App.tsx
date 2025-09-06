import './App.css'
import PokemonBox from './components/PokemonBox'
import { mockBox } from './data/mockData'

function App() {
  return (
    <div className="twitch-panel">
      <PokemonBox pokemonBox={mockBox} />
    </div>
  )
}

export default App
