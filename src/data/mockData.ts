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

const charizard: Pokemon = {
  species: 'Charizard',
  nickname: 'Blaze',
  dex_number: 6,
  level: 55,
  ivs: [31, 31, 31, 31, 31, 31],
  nature: 'Adamant',
  ability: 'Blaze',
  held_item: 'Charcoal',
  met_location: 'Pallet Town',
  met_level: 5,
  pokeball: 'Poke Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Flamethrower', 'Dragon Claw', 'Earthquake', 'Roost']
};

const pikachu: Pokemon = {
  species: 'Pikachu',
  nickname: 'Sparky',
  dex_number: 25,
  level: 40,
  ivs: [31, 31, 31, 31, 31, 31],
  nature: 'Jolly',
  ability: 'Static',
  held_item: 'Light Ball',
  met_location: 'Viridian Forest',
  met_level: 3,
  pokeball: 'Poke Ball',
  is_shiny: true,
  gender: 'Male',
  moves: ['Thunderbolt', 'Quick Attack', 'Iron Tail', 'Agility']
};

const gyarados: Pokemon = {
  species: 'Gyarados',
  nickname: 'Leviathan',
  dex_number: 130,
  level: 45,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Jolly',
  ability: 'Intimidate',
  held_item: 'Wacan Berry',
  met_location: 'Lake of Rage',
  met_level: 20,
  pokeball: 'Ultra Ball',
  is_shiny: true,
  gender: 'Male',
  moves: ['Waterfall', 'Earthquake', 'Ice Fang', 'Dragon Dance']
};

const lucario: Pokemon = {
  species: 'Lucario',
  nickname: 'Aura',
  dex_number: 448,
  level: 50,
  ivs: [31, 31, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Inner Focus',
  held_item: 'Expert Belt',
  met_location: 'Iron Island',
  met_level: 1,
  pokeball: 'Luxury Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Aura Sphere', 'Flash Cannon', 'Dark Pulse', 'Calm Mind']
};

const garchomp: Pokemon = {
  species: 'Garchomp',
  nickname: 'Landshark',
  dex_number: 445,
  level: 58,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Jolly',
  ability: 'Sand Veil',
  held_item: 'Rocky Helmet',
  met_location: 'Wayward Cave',
  met_level: 15,
  pokeball: 'Ultra Ball',
  is_shiny: false,
  gender: 'Female',
  moves: ['Earthquake', 'Dragon Claw', 'Stone Edge', 'Swords Dance']
};

const metagross: Pokemon = {
  species: 'Metagross',
  nickname: 'Steel',
  dex_number: 376,
  level: 52,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Adamant',
  ability: 'Clear Body',
  held_item: 'Leftovers',
  met_location: 'Steven\'s House',
  met_level: 20,
  pokeball: 'Poke Ball',
  is_shiny: false,
  gender: 'Genderless',
  moves: ['Meteor Mash', 'Earthquake', 'Ice Punch', 'Agility']
};

const dragonite: Pokemon = {
  species: 'Dragonite',
  nickname: 'Drake',
  dex_number: 149,
  level: 55,
  ivs: [31, 31, 31, 31, 31, 31],
  nature: 'Adamant',
  ability: 'Inner Focus',
  held_item: 'Dragon Fang',
  met_location: 'Game Corner',
  met_level: 18,
  pokeball: 'Great Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Dragon Rush', 'Earthquake', 'Fire Punch', 'Thunder Punch']
};

const alakazam: Pokemon = {
  species: 'Alakazam',
  nickname: 'Psychic',
  dex_number: 65,
  level: 48,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Timid',
  ability: 'Synchronize',
  held_item: 'Twisted Spoon',
  met_location: 'Cerulean Cave',
  met_level: 25,
  pokeball: 'Ultra Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Psychic', 'Shadow Ball', 'Focus Blast', 'Calm Mind']
};

const tyranitar: Pokemon = {
  species: 'Tyranitar',
  nickname: 'Godzilla',
  dex_number: 248,
  level: 55,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Adamant',
  ability: 'Sand Stream',
  held_item: 'Smooth Rock',
  met_location: 'Mt. Silver',
  met_level: 25,
  pokeball: 'Dusk Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Stone Edge', 'Crunch', 'Earthquake', 'Dragon Dance']
};

const salamence: Pokemon = {
  species: 'Salamence',
  nickname: 'Wyvern',
  dex_number: 373,
  level: 50,
  ivs: [31, 31, 31, 31, 31, 31],
  nature: 'Naive',
  ability: 'Intimidate',
  held_item: 'Life Orb',
  met_location: 'Meteor Falls',
  met_level: 30,
  pokeball: 'Timer Ball',
  is_shiny: false,
  gender: 'Female',
  moves: ['Dragon Claw', 'Earthquake', 'Fire Blast', 'Dragon Dance']
};

const gengar: Pokemon = {
  species: 'Gengar',
  nickname: 'Shadow',
  dex_number: 94,
  level: 45,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Timid',
  ability: 'Levitate',
  held_item: 'Choice Specs',
  met_location: 'Pokemon Tower',
  met_level: 25,
  pokeball: 'Dusk Ball',
  is_shiny: true,
  gender: 'Male',
  moves: ['Shadow Ball', 'Thunderbolt', 'Focus Blast', 'Destiny Bond']
};

const machamp: Pokemon = {
  species: 'Machamp',
  nickname: 'Muscle',
  dex_number: 68,
  level: 50,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Adamant',
  ability: 'Guts',
  held_item: 'Flame Orb',
  met_location: 'Victory Road',
  met_level: 28,
  pokeball: 'Great Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Dynamic Punch', 'Stone Edge', 'Ice Punch', 'Bullet Punch']
};

const lapras: Pokemon = {
  species: 'Lapras',
  nickname: 'Nessie',
  dex_number: 131,
  level: 42,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Water Absorb',
  held_item: 'Leftovers',
  met_location: 'Silph Co.',
  met_level: 15,
  pokeball: 'Master Ball',
  is_shiny: false,
  gender: 'Female',
  moves: ['Surf', 'Ice Beam', 'Thunderbolt', 'Heal Bell']
};

const snorlax: Pokemon = {
  species: 'Snorlax',
  nickname: 'Sleepy',
  dex_number: 143,
  level: 48,
  ivs: [31, 31, 31, 0, 31, 0],
  nature: 'Careful',
  ability: 'Thick Fat',
  held_item: 'Chesto Berry',
  met_location: 'Route 12',
  met_level: 30,
  pokeball: 'Heavy Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Body Slam', 'Rest', 'Sleep Talk', 'Earthquake']
};

const blastoise: Pokemon = {
  species: 'Blastoise',
  nickname: 'Hydro',
  dex_number: 9,
  level: 52,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Torrent',
  held_item: 'Mystic Water',
  met_location: 'Pallet Town',
  met_level: 5,
  pokeball: 'Poke Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Hydro Pump', 'Ice Beam', 'Focus Blast', 'Rapid Spin']
};

const arcanine: Pokemon = {
  species: 'Arcanine',
  nickname: 'Flame',
  dex_number: 59,
  level: 46,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Jolly',
  ability: 'Intimidate',
  held_item: 'Choice Band',
  met_location: 'Route 7',
  met_level: 18,
  pokeball: 'Ultra Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Flare Blitz', 'Extreme Speed', 'Thunder Fang', 'Crunch']
};

const crobat: Pokemon = {
  species: 'Crobat',
  nickname: 'Sonic',
  dex_number: 169,
  level: 44,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Jolly',
  ability: 'Inner Focus',
  held_item: 'Flying Gem',
  met_location: 'Dark Cave',
  met_level: 6,
  pokeball: 'Great Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Brave Bird', 'U-turn', 'Cross Poison', 'Roost']
};

const magnezone: Pokemon = {
  species: 'Magnezone',
  nickname: 'Magnet',
  dex_number: 462,
  level: 47,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Magnet Pull',
  held_item: 'Air Balloon',
  met_location: 'New Mauville',
  met_level: 25,
  pokeball: 'Poke Ball',
  is_shiny: false,
  gender: 'Genderless',
  moves: ['Thunderbolt', 'Flash Cannon', 'Hidden Power', 'Thunder Wave']
};

const scizor: Pokemon = {
  species: 'Scizor',
  nickname: 'Crimson',
  dex_number: 212,
  level: 49,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Adamant',
  ability: 'Technician',
  held_item: 'Choice Band',
  met_location: 'National Park',
  met_level: 20,
  pokeball: 'Sport Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Bullet Punch', 'U-turn', 'Pursuit', 'Roost']
};

const kingdra: Pokemon = {
  species: 'Kingdra',
  nickname: 'Seahorse',
  dex_number: 230,
  level: 45,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Swift Swim',
  held_item: 'Life Orb',
  met_location: 'Whirl Islands',
  met_level: 40,
  pokeball: 'Dive Ball',
  is_shiny: false,
  gender: 'Female',
  moves: ['Hydro Pump', 'Dragon Pulse', 'Ice Beam', 'Rain Dance']
};

const skarmory: Pokemon = {
  species: 'Skarmory',
  nickname: 'Steel Wing',
  dex_number: 227,
  level: 43,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Impish',
  ability: 'Sturdy',
  held_item: 'Leftovers',
  met_location: 'Route 45',
  met_level: 27,
  pokeball: 'Heavy Ball',
  is_shiny: false,
  gender: 'Female',
  moves: ['Brave Bird', 'Spikes', 'Roost', 'Whirlwind']
};

const umbreon: Pokemon = {
  species: 'Umbreon',
  nickname: 'Moonlight',
  dex_number: 197,
  level: 41,
  ivs: [31, 0, 31, 0, 31, 31],
  nature: 'Calm',
  ability: 'Synchronize',
  held_item: 'Leftovers',
  met_location: 'Ecruteak City',
  met_level: 20,
  pokeball: 'Moon Ball',
  is_shiny: true,
  gender: 'Female',
  moves: ['Toxic', 'Moonlight', 'Protect', 'Foul Play']
};

const espeon: Pokemon = {
  species: 'Espeon',
  nickname: 'Psyche',
  dex_number: 196,
  level: 41,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Timid',
  ability: 'Magic Bounce',
  held_item: 'Choice Specs',
  met_location: 'Ecruteak City',
  met_level: 20,
  pokeball: 'Love Ball',
  is_shiny: false,
  gender: 'Female',
  moves: ['Psychic', 'Shadow Ball', 'Dazzling Gleam', 'Grass Knot']
};

const heracross: Pokemon = {
  species: 'Heracross',
  nickname: 'Hercules',
  dex_number: 214,
  level: 46,
  ivs: [31, 31, 31, 0, 31, 31],
  nature: 'Jolly',
  ability: 'Guts',
  held_item: 'Flame Orb',
  met_location: 'Azalea Town',
  met_level: 15,
  pokeball: 'Net Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Close Combat', 'Megahorn', 'Stone Edge', 'Facade']
};

const forretress: Pokemon = {
  species: 'Forretress',
  nickname: 'Fortress',
  dex_number: 205,
  level: 42,
  ivs: [31, 31, 31, 0, 31, 0],
  nature: 'Relaxed',
  ability: 'Sturdy',
  held_item: 'Red Card',
  met_location: 'Route 31',
  met_level: 10,
  pokeball: 'Heavy Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Gyro Ball', 'Earthquake', 'Spikes', 'Explosion']
};

const ampharos: Pokemon = {
  species: 'Ampharos',
  nickname: 'Lighthouse',
  dex_number: 181,
  level: 44,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Modest',
  ability: 'Static',
  held_item: 'Ampharosite',
  met_location: 'Olivine City',
  met_level: 30,
  pokeball: 'Ultra Ball',
  is_shiny: false,
  gender: 'Female',
  moves: ['Thunderbolt', 'Dragon Pulse', 'Focus Blast', 'Signal Beam']
};

const steelix: Pokemon = {
  species: 'Steelix',
  nickname: 'Iron Snake',
  dex_number: 208,
  level: 43,
  ivs: [31, 31, 31, 0, 31, 0],
  nature: 'Brave',
  ability: 'Rock Head',
  held_item: 'Steelixite',
  met_location: 'Violet City',
  met_level: 5,
  pokeball: 'Heavy Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Earthquake', 'Iron Head', 'Stone Edge', 'Stealth Rock']
};

const milotic: Pokemon = {
  species: 'Milotic',
  nickname: 'Elegant',
  dex_number: 350,
  level: 47,
  ivs: [31, 0, 31, 31, 31, 31],
  nature: 'Bold',
  ability: 'Marvel Scale',
  held_item: 'Flame Orb',
  met_location: 'Route 119',
  met_level: 20,
  pokeball: 'Dive Ball',
  is_shiny: true,
  gender: 'Female',
  moves: ['Scald', 'Recover', 'Ice Beam', 'Toxic']
};

const flygon: Pokemon = {
  species: 'Flygon',
  nickname: 'Desert',
  dex_number: 330,
  level: 45,
  ivs: [31, 31, 31, 31, 31, 31],
  nature: 'Naive',
  ability: 'Levitate',
  held_item: 'Choice Scarf',
  met_location: 'Desert Resort',
  met_level: 35,
  pokeball: 'Timer Ball',
  is_shiny: false,
  gender: 'Male',
  moves: ['Earthquake', 'Dragon Claw', 'Fire Blast', 'U-turn']
};

export const mockBox: PokemonBox = {
  name: 'Box 1',
  pokemon: [
    bulbasaur, vulpixAlola, deoxysSpeed, venusaurGmax, charizard, pikachu,
    gyarados, lucario, garchomp, metagross, dragonite, alakazam,
    tyranitar, salamence, gengar, machamp, lapras, snorlax,
    blastoise, arcanine, crobat, magnezone, scizor, kingdra,
    skarmory, umbreon, espeon, heracross, forretress, ampharos,
    steelix, milotic, flygon, ...Array(17).fill(undefined) // Additional empty slots
  ]
};
