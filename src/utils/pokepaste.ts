import type { Pokemon } from '../types/Pokemon';

const statNames = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];

export const formatPokemonToPokepaste = (pokemon: Pokemon): string => {
  let pokepaste = '';
  
  // First line: Nickname (Species) @ Held Item
  if (pokemon.nickname && pokemon.nickname !== pokemon.species) {
    pokepaste += `${pokemon.nickname} (${pokemon.species})`;
  } else {
    pokepaste += pokemon.species;
  }
  
  if (pokemon.held_item) {
    pokepaste += ` @ ${pokemon.held_item}`;
  }
  pokepaste += '\n';
  
  // Ability line
  if (pokemon.ability) {
    pokepaste += `Ability: ${pokemon.ability}\n`;
  }
  
  // Nature line
  if (pokemon.nature) {
    pokepaste += `${pokemon.nature} Nature\n`;
  }
  
  // IVs line (only if not all 31s)
  if (pokemon.ivs && pokemon.ivs.length === 6) {
    const nonPerfectIVs = pokemon.ivs
      .map((iv, index) => ({ stat: statNames[index], value: iv }))
      .filter(iv => iv.value !== 31);
    
    if (nonPerfectIVs.length > 0) {
      const ivString = nonPerfectIVs
        .map(iv => `${iv.value} ${iv.stat}`)
        .join(' / ');
      pokepaste += `IVs: ${ivString}\n`;
    }
  }
  
  // Moves
  if (pokemon.moves && pokemon.moves.length > 0) {
    pokemon.moves.forEach(move => {
      pokepaste += `- ${move}\n`;
    });
  }
  
  return pokepaste;
};

export const formatBoxToPokepaste = (pokemonList: (Pokemon | null | undefined)[]): string => {
  const validPokemon = pokemonList.filter(p => p !== null && p !== undefined) as Pokemon[];
  
  return validPokemon
    .map(pokemon => formatPokemonToPokepaste(pokemon))
    .join('\n');
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers or when clipboard API is not available
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    } catch (fallbackErr) {
      console.error('Failed to copy to clipboard:', fallbackErr);
      return false;
    }
  }
};
