import { Component } from '@angular/core';

type GalleryItem = {
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
};

type SongSuggestion = {
  moment: string;
  songs: string[];
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App {
  readonly galleryItems: GalleryItem[] = [
    {
      image: '/assets/foto_oficial.jpeg',
      alt: 'Grupo Quatro Vozes Um Sim em uma cerimonia na igreja',
      label: 'Cerimonia na igreja',
      title: 'Harmonia para a entrada dos noivos',
      description:
        'Vozes conduzindo o inicio da celebracao com delicadeza, presenca e um repertorio escolhido para emocionar familiares e convidados.',
    },
    {
      image: '/assets/foto_oficial.jpeg',
      alt: 'Integrantes do grupo durante registro de casamento',
      label: 'Momento das aliancas',
      title: 'Trilha suave para o ponto mais simbolico',
      description:
        'Arranjos vocais pensados para sustentar a emocao do rito sem pesar, deixando a palavra e o gesto dos noivos em primeiro plano.',
    },
    {
      image: '/assets/foto_oficial.jpeg',
      alt: 'Quatro Vozes Um Sim em espaco de celebracao',
      label: 'Saida celebrativa',
      title: 'Musica para fechar a cerimonia com alegria',
      description:
        'Repertorio mais luminoso para acompanhar os cumprimentos, as fotos e aquele primeiro instante do casal depois do sim.',
    },
  ];

  readonly songSuggestions: SongSuggestion[] = [
    {
      moment: 'Pais e Padrinhos',
      songs: [
        'Eternos amigos',
        'Sou teu anjo aqui',
        'Amigos pela fé',
        'O céu se abre',
        'Tua Família',
        'Casa - Colo de Deus',
      ],
    },
    {
      moment: 'Noivo',
      songs: [
        'Pra Sempre - Nicodemos Costa',
        'Simplesmente José - Eugênio Jorge',
        'Te amo e te amarei - Pe. Zezinho',
        'Abraço eterno - Pe. Fábio',
        'Vou te amar - Marcio Todeschini',
        'Terra Seca',
      ],
    },
    {
      moment: 'Daminhas e Pagens',
      songs: ['Amar como Jesus amou', 'Anjos de Deus', 'Mãezinha do céu'],
    },
    {
      moment: 'Noiva',
      songs: [
        'Ave-Maria',
        'A padroeira',
        'Deixa Deus sonhar em ti',
        'Jesus meu esposo',
        'O primeiro olhar',
        'Abraço eterno',
        'Eis-me aqui - Colo de Deus',
        'Eu Juro - Leandro e Leonardo',
      ],
    },
    {
      moment: 'Evangelho',
      songs: ['Aleluia', 'Fala Senhor', 'Buscai primeiro'],
    },
    {
      moment: 'Alianças',
      songs: [
        'Cada dia - Davidson Silva',
        'Eu sei que vou te amar - Tom Jobim',
        'Aliança Verdadeira - Carol Carolo',
        'Essa Aliança - Entretons',
      ],
    },
    {
      moment: 'Comunhão',
      songs: [
        'Sacramento da comunhão',
        'Milagre de amor',
        'Ao partir o pão',
        'Mística sublime',
        'Incomparável comunhão',
      ],
    },
    {
      moment: 'Após os Votos e Saída dos Noivos',
      songs: [
        'Você e Eu - Eliane Ribeiro',
        'Águia pequena - Pe. Zezinho',
        'Terra seca',
        'Oração pela família',
        'Juramento - Padre Zezinho',
        'Oração do amor - Arianne',
        'Humano amor de Deus - Pe. Fábio',
        'Nossa História - Dunga',
        'Eu te levantarei',
        'Eu seguirei',
      ],
    },
  ];

  activeGalleryIndex = 0;

  get activeGalleryItem(): GalleryItem {
    return this.galleryItems[this.activeGalleryIndex];
  }

  previousGalleryPhoto(): void {
    this.activeGalleryIndex =
      (this.activeGalleryIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
  }

  nextGalleryPhoto(): void {
    this.activeGalleryIndex = (this.activeGalleryIndex + 1) % this.galleryItems.length;
  }

  setGalleryPhoto(index: number): void {
    this.activeGalleryIndex = index;
  }
}
