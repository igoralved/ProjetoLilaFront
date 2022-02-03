import { CartaDoJogo } from './cartaDoJogo';
import { CartaInicio } from './cartaInicio';
import { CartaObjetivo } from './cartaObjetivo';

export interface Jogador {
  nome: string;
  cartasDoJogo: CartaDoJogo[];
  cartasObjetivo: CartaObjetivo[];
  pontos: number;
  coracaoPeq: number;
  coracaoGra: number;
  bonusCoracaoPeq: number;
  bonusCoracaoGra: number;
  ishost: boolean;
  status: string;
}
