import { Component } from '@angular/core';

type GalleryItem = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
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
      type: 'image',
      src: '/assets/foto_oficial.jpeg',
      alt: 'Grupo Quatro Vozes Um Sim em uma cerimonia na igreja',
      label: 'Cerimônia na igreja',
      title: 'Uma trilha sonora para contar a sua história',
      description:
        'Cada momento do casamento possui uma emoção única. Para ajudar na escolha do repertório, reunimos sugestões cuidadosamente selecionadas para acompanhar cada etapa da cerimônia, respeitando o estilo, a personalidade a história de cada casal.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/MISTICA-SUBLIME-COLO-DE-DEUS.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Mistica Sublime',
      label: 'Comunhão',
      title: 'Mistica sublime',
      description:
        'Ao som de Mística Sublime, a Comunhão ganha ainda mais profundidade e beleza. Este registro permite sentir a suavidade das vozes e a atmosfera de oração que a música proporciona, preenchendo a celebração com fé, emoção e serenidade.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/TERRA-SECA-FRATERNIDADE-SAO-JOAO-PAULO-II.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Terra Seca',
      label: 'Entrada do noivo',
      title: 'Terra Seca',
      description:
        'Ao som de "Terra Seca", este momento expressa a sede profunda do coração humano pelo amor de Deus. Uma canção que transforma a aridez em esperança e revela que, quando confiamos no Senhor, até os desertos podem florescer.',
    },
    {
      type: 'video',
      src: 'https://ibjotqrferjkviz5.public.blob.vercel-storage.com/primeiro_olhar_anjos_de_resgate.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Primeiro Olhar',
      label: 'Assinatura dos padrinhos e fotos',
      title: 'Primeiro Olhar',
      description:
        'Registro em vídeo ao som de Primeiro Olhar, capturando a emoção, a expectativa e a beleza de um instante único, onde os olhares expressam sentimentos que as palavras não conseguem descrever.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/COLO-DE-MAE-ADRIANA-ARYDES.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Colo de Mãe',
      label: 'Entrada da Imagem',
      title: 'Colo de Mãe',
      description:
        'Ao som de "Colo de Mãe", de Ariana Arydes, este momento convida a repousar no abraço materno de Maria. Entre olhares, gestos e emoções, a canção recorda que nunca caminhamos sozinhos quando nos deixamos conduzir pelo amor da Mãe que acolhe, protege e intercede por seus filhos.',
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
