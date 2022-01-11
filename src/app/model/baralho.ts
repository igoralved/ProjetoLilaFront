import { CartaDoJogo } from "./cartaDoJogo";
import { CartaInicio } from "./cartaInicio";
import { CartaObjetivo } from "./cartaObjetivo";

export interface Baralho{
    id: string;
    codigo: string;
    cartaDoJogo: CartaDoJogo[];
    cartaObjetivo: CartaObjetivo[];
    cartaInicio: CartaInicio[];
    titulo: string;
    descricao: string;    
}