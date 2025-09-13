import React, { useState } from 'react';
import type { Pokemon } from '../types/Pokemon';
import { formatPokemonToPokepaste, copyToClipboard } from '../utils/pokepaste';
import './PokemonSummary.css';

interface PokemonSummaryProps {
  pokemon: Pokemon;
  onBack: () => void;
}

const formatSpeciesName = (species: string): string => {
  return species.toLowerCase().replace(/[^a-z0-9]/g, '-');
};

const getNatureModifiers = (nature: string): { positive: string | null, negative: string | null } => {
  const natureMap: { [key: string]: { positive: string | null, negative: string | null } } = {
    adamant: { positive: 'atk', negative: 'spa' },
    bashful: { positive: null, negative: null },
    bold: { positive: 'def', negative: 'atk' },
    brave: { positive: 'atk', negative: 'spe' },
    calm: { positive: 'spd', negative: 'atk' },
    careful: { positive: 'spd', negative: 'spa' },
    docile: { positive: null, negative: null },
    gentle: { positive: 'spd', negative: 'def' },
    hardy: { positive: null, negative: null },
    hasty: { positive: 'spe', negative: 'def' },
    impish: { positive: 'def', negative: 'spa' },
    jolly: { positive: 'spe', negative: 'spa' },
    lax: { positive: 'def', negative: 'spd' },
    lonely: { positive: 'atk', negative: 'def' },
    mild: { positive: 'spa', negative: 'def' },
    modest: { positive: 'spa', negative: 'atk' },
    naive: { positive: 'spe', negative: 'spd' },
    naughty: { positive: 'atk', negative: 'def' },
    quiet: { positive: 'spa', negative: 'spe' },
    quirky: { positive: null, negative: null },
    rash: { positive: 'spa', negative: 'spd' },
    relaxed: { positive: 'def', negative: 'spe' },
    sassy: { positive: 'spd', negative: 'spe' },
    serious: { positive: null, negative: null },
    timid: { positive: 'spe', negative: 'atk' }
  };
  
  return natureMap[nature.toLowerCase()] || { positive: null, negative: null };
};

const getStatModifierClass = (statName: string, nature: string): string => {
  const { positive, negative } = getNatureModifiers(nature);
  
  if (statName === positive) return 'stat-positive';
  if (statName === negative) return 'stat-negative';
  return 'stat-neutral';
};

const PokemonSummary: React.FC<PokemonSummaryProps> = ({ pokemon, onBack }) => {
  const [copyStatus, setCopyStatus] = useState<string>('');
  const spriteUrl = `./sprites/${formatSpeciesName(pokemon.species)}.png`;

  const handleCopyPokepaste = async () => {
    const pokepaste = formatPokemonToPokepaste(pokemon);
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
    <div className="pokemon-summary">
      <div className="summary-header">
        <button className="copy-button" onClick={handleCopyPokepaste} title="Copy Pokepaste">
          {copyStatus || '📋'}
        </button>
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
            <h2 className="pokemon-nickname">{pokemon.nickname} {pokemon.gender && `${pokemon.gender === 'Male' ? '♂' : pokemon.gender === 'Female' ? '♀' : ''}`}</h2>
            <p className="pokemon-species">{pokemon.species}</p>
            {pokemon.held_item && <p className="pokemon-species">{pokemon.held_item}</p>}
            {pokemon.level && <p className="pokemon-level">Lv. {pokemon.level}</p>}
          </div>
        </div>
        
        <div className="summary-bottom">
          <div className="info-box">
            <h3>Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">HP:</span>
                <span className={`stat-value ${getStatModifierClass('hp', pokemon.nature)}`}>{pokemon.ivs[0]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Atk:</span>
                <span className={`stat-value ${getStatModifierClass('atk', pokemon.nature)}`}>{pokemon.ivs[1]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Def:</span>
                <span className={`stat-value ${getStatModifierClass('def', pokemon.nature)}`}>{pokemon.ivs[2]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SpA:</span>
                <span className={`stat-value ${getStatModifierClass('spa', pokemon.nature)}`}>{pokemon.ivs[3]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SpD:</span>
                <span className={`stat-value ${getStatModifierClass('spd', pokemon.nature)}`}>{pokemon.ivs[4]}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Spe:</span>
                <span className={`stat-value ${getStatModifierClass('spe', pokemon.nature)}`}>{pokemon.ivs[5]}</span>
              </div>
            </div>
          </div>
          
          <div className="info-box">
            <h3>Details</h3>
            {pokemon.nature && <p><strong>Nature:</strong> {pokemon.nature}</p>}
            {pokemon.ability && <p><strong>Ability:</strong> {pokemon.ability}</p>}
            {pokemon.gender && <p><strong>Gender:</strong> {pokemon.gender}</p>}
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
