import React, { useState } from 'react';
import type { Pokemon, PokemonBox as PokemonBoxType } from '../types/Pokemon';
import PokemonSprite from './PokemonSprite';
import { formatBoxToPokepaste, copyToClipboard } from '../utils/pokepaste';
import './PokemonBox.css';

interface PokemonBoxProps {
  pokemonBox: PokemonBoxType;
  onPokemonClick?: (pokemon: Pokemon) => void;
}

const PokemonBox: React.FC<PokemonBoxProps> = ({ pokemonBox, onPokemonClick }) => {
  const [copyStatus, setCopyStatus] = useState<string>('');

  const handleCopyBoxPokepaste = async () => {
    const pokepaste = formatBoxToPokepaste(pokemonBox.pokemon);
    const success = await copyToClipboard(pokepaste);
    
    if (success) {
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000);
    } else {
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  return (
    <div className="pokemon-box">
      <div className="box-header">
        <button className="copy-box-button" onClick={handleCopyBoxPokepaste} title="Copy Box Pokepaste">
          {copyStatus || '📋'}
        </button>
      </div>
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
