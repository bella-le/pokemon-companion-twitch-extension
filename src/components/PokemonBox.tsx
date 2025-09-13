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
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  const pokemonPerPage = 24;
  const totalPages = Math.ceil(pokemonBox.pokemon.length / pokemonPerPage);
  const startIndex = currentPage * pokemonPerPage;
  const currentPagePokemon = pokemonBox.pokemon.slice(startIndex, startIndex + pokemonPerPage);

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

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="pokemon-box">
      <div className="box-header">
        {totalPages > 1 ? (
          <>
            <button 
              className="pagination-button left" 
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              title="Previous Page"
            >
              ←
            </button>
            <button className="copy-box-button" onClick={handleCopyBoxPokepaste} title="Copy Box Pokepaste">
              {copyStatus || '📋'}
            </button>
            <button 
              className="pagination-button right" 
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              title="Next Page"
            >
              →
            </button>
          </>
        ) : (
          <button className="copy-box-button" onClick={handleCopyBoxPokepaste} title="Copy Box Pokepaste">
            {copyStatus || '📋'}
          </button>
        )}
      </div>
      <div className="box-content">
        <div className="pokemon-grid">
          {Array.from({ length: 24 }, (_, index) => (
            <PokemonSprite
              key={`${currentPage}-${index}`}
              pokemon={currentPagePokemon[index]}
              slotIndex={startIndex + index}
              onPokemonClick={onPokemonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonBox;
