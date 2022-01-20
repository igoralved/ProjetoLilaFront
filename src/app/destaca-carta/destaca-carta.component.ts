import { Component, OnInit } from '@angular/core';
import { Carta } from '../model/carta';
import { Jogador } from '../model/jogador';

@Component({
  selector: 'app-destaca-carta',
  templateUrl: './destaca-carta.component.html',
  styleUrls: ['./destaca-carta.component.scss']
})
export class DestacaCartaComponent implements OnInit {
  public listajogador: Array<Jogador> = [];
  public listaCartas: Array<Carta> = [];
  public jogador: Jogador = {
    nome: 'Paola',
    listaDeCartas: [
      {
        id: 'd5c04bec-d0c0-414a-b160-6383c437267f',
        tipo: 'Definição',
        categoria: 'visual',
        bonus: false,
        texto:
          'Deficiência visual abrange pessoas cegas e pessoas com visão reduzida',
        valorCorPequeno: 1,
        valorCorGrande: 0,
        fonte: 'Wikipedia',
        pontos: 1,
      },
      {
        id: 'bb1ebadf-50c8-463c-8eb3-6f3998a466f3',
        tipo: 'Informação',
        categoria: 'visual',
        bonus: true,
        texto:
          'A deficiência visual pode ser congênita ou adquirida ao longo da vida.',
        valorCorPequeno: 2,
        valorCorGrande: 0,
        fonte: ' www.deficienteonline.com.br',
        pontos: 1,
      },
    ],
    listaDeObjetivos: [
      {
        id: 'c15aafd2-8f1f-4863-9a9d-4bfe8c2d3261',
        classificacao:
          'Ganhe 3 pontos se você tiver a maior quantidade de cartas da categoria Física ao final da partida',
        pontos: 3,
        categoria: 'FISICA',
        descricao: 'Um dos seus\nfuncionários passou a usar cadeira de rodas.',
      },
    ],
    pontos: 2,
    coracaoPeq: 3,
    coracaoGra: 1,
    bonusCoracaoPeq: 0,
    bonusCoracaoGra: 0,
  } as Jogador;
  public carta: Carta = {} as Carta;
  constructor() {

   }

  ngOnInit(): void {
  }

  public checaCoracaoPeq(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.coracaoPeq = filterBy);
  }

  public checaCoracaoGra(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.coracaoGra = filterBy);
  }

  public checaBonusPeq(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.bonusCoracaoPeq = filterBy);
  }

  public checaBonusGra(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.bonusCoracaoGra = filterBy);
  }

  public checaCompra(): boolean {
    const coracaopequeno = this.jogador.coracaoPeq + this.jogador.bonusCoracaoPeq;
    console.log(coracaopequeno)
    const coracaopequenocarta = this.carta.valorCorPequeno;
    const coracaogrande = this.jogador.coracaoGra + this.jogador.bonusCoracaoGra;
    const coracaograndecarta = this.carta.valorCorGrande;

    return (coracaopequenocarta <= coracaopequeno && coracaograndecarta <= coracaogrande
    );
  }

}
