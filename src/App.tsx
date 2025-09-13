import { useState } from 'react'
import './App.css'
import PokemonBox from './components/PokemonBox'
import PokemonSummary from './components/PokemonSummary'
import { mockBox } from './data/mockData'
import type { Pokemon } from './types/Pokemon'

type TransitionState = 'box' | 'transitioning-to-summary' | 'summary' | 'transitioning-to-box'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [transitionState, setTransitionState] = useState<TransitionState>('box')

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon)
    setTransitionState('transitioning-to-summary')
    setTimeout(() => {
      setTransitionState('summary')
    }, 50) // Small delay to trigger animation
  }

  const handleBackToBox = () => {
    setTransitionState('transitioning-to-box')
    setTimeout(() => {
      setSelectedPokemon(null)
      setTransitionState('box')
    }, 300) // Match CSS transition duration
  }

  const getSummaryClass = () => {
    switch (transitionState) {
      case 'transitioning-to-summary':
      case 'summary':
        return transitionState === 'summary' ? 'summary-visible' : 'summary-entering'
      case 'transitioning-to-box':
        return 'summary-exiting'
      default:
        return 'summary-hidden'
    }
  }

  return (
    <div className="twitch-panel">
      <PokemonBox 
        pokemonBox={mockBox} 
        onPokemonClick={handlePokemonClick}
      />
      {selectedPokemon && (
        <div className={`summary-overlay ${getSummaryClass()}`}>
          <PokemonSummary 
            pokemon={selectedPokemon} 
            onBack={handleBackToBox}
          />
        </div>
      )}
    </div>
  )
}

export default App
