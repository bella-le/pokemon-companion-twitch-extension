import type { Pokemon, PokemonBox } from '../types/Pokemon';

const bulbasaur: Pokemon = {
  species: 'Bulbasaur',
  nickname: 'Bulby',
  dex_number: 1,
  level: 25,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Overgrow',
  held_item: 'Leftovers',
  met_location: 'Pallet Town',
  met_level: 5,
  pokeball: 'Poke Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Vine Whip', 'Tackle', 'Growl', 'Leech Seed']
};

const vulpixAlola: Pokemon = {
  species: 'Vulpix-Alola',
  nickname: 'Snowy',
  dex_number: 37,
  level: 30,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Timid',
  ability: 'Snow Cloak',
  held_item: 'Never-Melt Ice',
  met_location: 'Mount Lanakila',
  met_level: 12,
  pokeball: 'Premier Ball',
  is_shiny: true,
  gender: 'Female',
  moves: ['Ice Beam', 'Aurora Veil', 'Freeze-Dry', 'Moonblast']
};

const deoxysSpeed: Pokemon = {
  species: 'Deoxys-Speed',
  nickname: 'Speedy',
  dex_number: 386,
  level: 50,
  ivs: [31, 31, 31, 31, 31, 31],
  nature: 'Timid',
  ability: 'Pressure',
  held_item: 'Focus Sash',
  met_location: 'Space',
  met_level: 50,
  pokeball: 'Master Ball',
  is_shiny: false,
  gender: 'Genderless',
  moves: ['Psycho Boost', 'Superpower', 'Ice Beam', 'Thunder']
};

const venusaurGmax: Pokemon = {
  species: 'Venusaur-Gmax',
  nickname: 'BigVenu',
  dex_number: 3,
  level: 60,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Chlorophyll',
  held_item: 'Life Orb',
  met_location: 'Galar Route 2',
  met_level: 5,
  pokeball: 'Poke Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Giga Drain', 'Sludge Bomb', 'Earth Power', 'Sleep Powder']
};

export const mockBox: PokemonBox = {
  name: 'Box 1',
  pokemon: [
    bulbasaur,     // Slot 1
    vulpixAlola,   // Slot 2
    deoxysSpeed,   // Slot 3
    venusaurGmax,  // Slot 4
    ...Array(20).fill(undefined) // Slots 5-24 are empty
  ]
};
