import {
  Attribute,
  AttributeShort,
  Characteristic,
  CharacteristicShort,
} from '../types/attributes'

export const characteristicsBlank: Characteristic[] = [
  {
    name: 'Movement',
    name_br: 'Movimento',
    baseValue: 0,
    advances: 0,
    short: 'M',
  },
  {
    name: 'Weapon Skill',
    name_br: 'Combate Armado',
    baseValue: 0,
    advances: 0,
    short: 'WS',
  },
  {
    name: 'Ballistic Skill',
    name_br: 'Balística',
    baseValue: 0,
    advances: 0,
    short: 'BS',
  },
  {
    name: 'Strength',
    name_br: 'Força',
    baseValue: 0,
    advances: 0,
    short: 'S',
  },
  {
    name: 'Toughness',
    name_br: 'Robustez',
    baseValue: 0,
    advances: 0,
    short: 'T',
  },
  {
    name: 'Initiative',
    name_br: 'Iniciativa',
    baseValue: 0,
    advances: 0,
    short: 'I',
  },
  {
    name: 'Agility',
    name_br: 'Agilidade',
    baseValue: 0,
    advances: 0,
    short: 'Ag',
  },
  {
    name: 'Dexterity',
    name_br: 'Destreza',
    baseValue: 0,
    advances: 0,
    short: 'Dex',
  },
  {
    name: 'Intelligence',
    name_br: 'Inteligência',
    baseValue: 0,
    advances: 0,
    short: 'Int',
  },
  {
    name: 'Will Power',
    name_br: 'Vontade',
    baseValue: 0,
    advances: 0,
    short: 'WP',
  },
  {
    name: 'Fellowship',
    name_br: 'Carisma',
    baseValue: 0,
    advances: 0,
    short: 'Fel',
  },
  {
    name: 'Wounds',
    name_br: 'Ferimentos',
    baseValue: 0,
    advances: 0,
    short: 'W',
  },
]

export const characteristicsSample: Characteristic[] = [
  {
    name: 'Movement',
    name_br: 'Movimento',
    baseValue: 3,
    advances: 0,
    short: 'M',
  },
  {
    name: 'Weapon Skill',
    name_br: 'Combate Armado',
    baseValue: 32,
    advances: 0,
    short: 'WS',
  },
  {
    name: 'Ballistic Skill',
    name_br: 'Balística',
    baseValue: 28,
    advances: 0,
    short: 'BS',
  },
  {
    name: 'Strength',
    name_br: 'Força',
    baseValue: 40,
    advances: 0,
    short: 'S',
  },
  {
    name: 'Toughness',
    name_br: 'Robustez',
    baseValue: 42,
    advances: 0,
    short: 'T',
  },
  {
    name: 'Initiative',
    name_br: 'Iniciativa',
    baseValue: 30,
    advances: 0,
    short: 'I',
  },
  {
    name: 'Agility',
    name_br: 'Agilidade',
    baseValue: 33,
    advances: 0,
    short: 'Ag',
  },
  {
    name: 'Dexterity',
    name_br: 'Destreza',
    baseValue: 40,
    advances: 0,
    short: 'Dex',
  },
  {
    name: 'Intelligence',
    name_br: 'Inteligência',
    baseValue: 30,
    advances: 0,
    short: 'Int',
  },
  {
    name: 'Will Power',
    name_br: 'Vontade',
    baseValue: 30,
    advances: 0,
    short: 'WP',
  },
  {
    name: 'Fellowship',
    name_br: 'Carisma',
    baseValue: 30,
    advances: 0,
    short: 'Fel',
  },
  {
    name: 'Wounds',
    name_br: 'Ferimentos',
    baseValue: 15,
    advances: 0,
    short: 'W',
  },
]

export const attributesBlank: Attribute[] = [
  ...characteristicsBlank,
  {
    name: 'Fate',
    name_br: 'Destino',
    baseValue: 0,
    advances: 0,
    short: 'Fate',
  },
  {
    name: 'Fortune',
    name_br: 'Sorte',
    baseValue: 0,
    advances: 0,
    short: 'For',
  },
  {
    name: 'Resilience',
    name_br: 'Resiliência',
    baseValue: 0,
    advances: 0,
    short: 'Res',
  },
  {
    name: 'Resolve',
    name_br: 'Determinação',
    baseValue: 0,
    advances: 0,
    short: 'Res',
  },
]

export const attrRef = new Map<CharacteristicShort | AttributeShort, number>([
  ['M', 0],
  ['WS', 1],
  ['BS', 2],
  ['S', 3],
  ['T', 4],
  ['I', 5],
  ['Ag', 6],
  ['Dex', 7],
  ['Int', 8],
  ['WP', 9],
  ['Fel', 10],
  ['W', 11],
  ['Fate', 12],
  ['For', 13],
  ['Res', 14],
  ['Res', 15],
])
