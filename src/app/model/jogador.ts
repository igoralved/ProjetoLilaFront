//TODO arrumar os tipos das listas de carta e carta objetivo
export interface Jogador{
    nome: string,
    cartas: string[],
    pontos: number,
    coracaoPeq: number,
    coracaoGra: number,
    bonusCoracaoPeq: number,
    bonusCoracaoGra: number,
    cartas_objetivo: string[]
}