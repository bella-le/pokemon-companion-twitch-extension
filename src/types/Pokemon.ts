export interface Pokemon {
  species: string; // Important for variants like Vulpix-Alola
  nickname: string;
  ivs: [number, number, number, number, number, number]; // [HP, Atk, Def, SpA, SpD, Spe]
  nature: string;
  ability: string;
  gender: 'Male' | 'Female' | 'Genderless';
  moves: [string, string, string, string]; // Exactly 4 moves
  
  // Optional fields - will show in summary if provided
  dex_number?: number;
  level?: number;
  held_item?: string;
  met_location?: string;
  met_level?: number;
  pokeball?: string;
  is_shiny?: boolean;
}

export interface PokemonBox {
  name: string;
  pokemon: (Pokemon | undefined)[];
}
