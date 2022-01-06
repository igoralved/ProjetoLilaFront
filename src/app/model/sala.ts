import { Baralho } from './baralho';

export interface Sala {
  id: string;
  hash: string;
  baralho: Baralho;
  jogadores: string[]; // TODO: Lista de Jogadores, arrumar tipo
}
