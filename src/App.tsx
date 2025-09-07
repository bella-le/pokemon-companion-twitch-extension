import { useState } from 'react'
import './App.css'
import PokemonBox from './components/PokemonBox'
import PokemonSummary from './components/PokemonSummary'
import { mockBox } from './data/mockData'
import type { Pokemon } from './types/Pokemon'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon)
  }

  const handleBackToBox = () => {
    setSelectedPokemon(null)
  }

  return (
    <div className="twitch-panel">
      {selectedPokemon ? (
        <PokemonSummary 
          pokemon={selectedPokemon} 
          onBack={handleBackToBox}
        />
      ) : (
        <PokemonBox 
          pokemonBox={mockBox} 
          onPokemonClick={handlePokemonClick}
        />
      )}
    </div>
  )
}

export default App
