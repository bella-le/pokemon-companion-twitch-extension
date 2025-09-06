import React from 'react';
import type { Pokemon } from '../types/Pokemon';
import './PokemonSprite.css';

interface PokemonSpriteProps {
  pokemon?: Pokemon;
  slotIndex: number;
}

const formatSpeciesName = (species: string): string => {
  return species.toLowerCase().replace(/[^a-z0-9]/g, '-');
};

const PokemonSprite: React.FC<PokemonSpriteProps> = ({ pokemon, slotIndex }) => {
  if (!pokemon) {
    return (
      <div className="pokemon-sprite empty-slot">
        <span className="slot-number">{slotIndex + 1}</span>
      </div>
    );
  }

  const spriteUrl = `./sprites/${formatSpeciesName(pokemon.species)}.png`;

  return (
    <div className="pokemon-sprite occupied-slot">
      <img 
        src={spriteUrl} 
        alt={pokemon.nickname || pokemon.species}
        className="sprite-image"
      />
      {pokemon.is_shiny && <div className="shiny-indicator">✨</div>}
    </div>
  );
};

export default PokemonSprite;
