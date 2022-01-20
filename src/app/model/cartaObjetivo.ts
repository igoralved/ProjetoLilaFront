import { Baralho } from "./baralho";

export interface CartaObjetivo {
    id: string;
    baralho: Baralho[];
    classificacao: string;
    pontos: number;
    categoria: string;
    descricao:string;
    
}