import React from 'react';
import type { PokemonBox as PokemonBoxType, Pokemon } from '../types/Pokemon';
import PokemonSprite from './PokemonSprite';
import './PokemonBox.css';

interface PokemonBoxProps {
  pokemonBox: PokemonBoxType;
  onPokemonClick?: (pokemon: Pokemon) => void;
}

const PokemonBox: React.FC<PokemonBoxProps> = ({ pokemonBox, onPokemonClick }) => {
  return (
    <div className="pokemon-box">
      <div className="box-content">
        <div className="pokemon-grid">
          {Array.from({ length: 24 }, (_, index) => (
            <PokemonSprite
              key={index}
              pokemon={pokemonBox.pokemon[index]}
              slotIndex={index}
              onPokemonClick={onPokemonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonBox;
