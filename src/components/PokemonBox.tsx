import React from 'react';
import type { PokemonBox as PokemonBoxType } from '../types/Pokemon';
import PokemonSprite from './PokemonSprite';
import './PokemonBox.css';

interface PokemonBoxProps {
  pokemonBox: PokemonBoxType;
}

const PokemonBox: React.FC<PokemonBoxProps> = ({ pokemonBox }) => {
  return (
    <div className="pokemon-box">
      <div className="box-content">
        <div className="pokemon-grid">
          {Array.from({ length: 24 }, (_, index) => (
            <PokemonSprite
              key={index}
              pokemon={pokemonBox.pokemon[index]}
              slotIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonBox;
