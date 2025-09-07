import React from 'react';
import type { Pokemon } from '../types/Pokemon';
import './PokemonSummary.css';

interface PokemonSummaryProps {
  pokemon: Pokemon;
  onBack: () => void;
}

const formatSpeciesName = (species: string): string => {
  return species.toLowerCase().replace(/[^a-z0-9]/g, '-');
};

const PokemonSummary: React.FC<PokemonSummaryProps> = ({ pokemon, onBack }) => {
  const spriteUrl = `./sprites/${formatSpeciesName(pokemon.species)}.png`;

  return (
    <div className="pokemon-summary">
      <div className="summary-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      </div>
      
      <div className="summary-content">
        <div className="summary-top">
          <div className="pokemon-sprite-large">
            <img 
              src={spriteUrl} 
              alt={pokemon.nickname || pokemon.species}
              className="large-sprite-image"
            />
            {pokemon.is_shiny && <div className="shiny-indicator-large">✨</div>}
          </div>
          <div className="pokemon-basic-info">
            <h2 className="pokemon-nickname">{pokemon.nickname}</h2>
            <p className="pokemon-species">{pokemon.species}</p>
            {pokemon.level && <p className="pokemon-level">Lv. {pokemon.level}</p>}
          </div>
        </div>
        
        <div className="summary-bottom">
          <div className="info-box">
            <h3>Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">HP:</span>
                <span className="stat-value">{pokemon.ivs[0]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Atk:</span>
                <span className="stat-value">{pokemon.ivs[1]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Def:</span>
                <span className="stat-value">{pokemon.ivs[2]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SpA:</span>
                <span className="stat-value">{pokemon.ivs[3]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SpD:</span>
                <span className="stat-value">{pokemon.ivs[4]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Spe:</span>
                <span className="stat-value">{pokemon.ivs[5]}</span>
              </div>
            </div>
          </div>
          
          <div className="info-box">
            <h3>Details</h3>
            <p><strong>Nature:</strong> {pokemon.nature}</p>
            <p><strong>Ability:</strong> {pokemon.ability}</p>
            <p><strong>Gender:</strong> {pokemon.gender}</p>
            {pokemon.held_item && <p><strong>Held Item:</strong> {pokemon.held_item}</p>}
          </div>
          
          <div className="info-box">
            <h3>Moves</h3>
            <div className="moves-grid">
              {pokemon.moves.map((move, index) => (
                <div key={index} className="move-item">{move}</div>
              ))}
            </div>
          </div>
          
          {(pokemon.met_location || pokemon.pokeball) && (
            <div className="info-box">
              <h3>Origin</h3>
              {pokemon.met_location && <p><strong>Met:</strong> {pokemon.met_location}</p>}
              {pokemon.met_level && <p><strong>Met Level:</strong> {pokemon.met_level}</p>}
              {pokemon.pokeball && <p><strong>Ball:</strong> {pokemon.pokeball}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonSummary;
