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
        'Ao som de "Colo de Mãe", de Adriana Arydes, este momento convida a repousar no abraço materno de Maria. Entre olhares, gestos e emoções, a canção recorda que nunca caminhamos sozinhos quando nos deixamos conduzir pelo amor da Mãe que acolhe, protege e intercede por seus filhos.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/EU-JURO-LEANDRO-E-LEONARDO.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Eu Juro',
      label: 'Entrada da Noiva',
      title: 'Eu Juro',
      description:
        'Registro em vídeo ao som de "Eu Juro", de Leandro & Leonardo, marcando um dos momentos mais emocionantes da celebração. Uma canção que expressa a beleza das promessas feitas diante do amor, da cumplicidade e da decisão de construir uma vida a dois.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/CHUVA-DE-GRACA-ELIANE-RIBEIRO.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Chuva de graça',
      label: 'Saída dos Noivos',
      title: 'Chuva de graça',
      description:
        'Registro em vídeo ao som de "Chuva de Graça", de Eliana Ribeiro, este momento celebra a alegria do amor abençoado por Deus. Na saída dos noivos, a canção expressa a certeza de que a graça divina acompanha cada passo dessa nova caminhada, derramando bênçãos, esperança e felicidade sobre a família que nasce.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/SINAL-DO-MEU-AMOR-DAVIDSON-SILVA.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Sinal do meu amor',
      label: 'Alianças',
      title: 'Sinal do meu amor',
      description:
        'Registro em vídeo ao som de "Sinal do Meu Amor", de Davidson Silva, as alianças selam a união de duas vidas que agora caminham como uma só. Um gesto simples, mas carregado de significado, que expressa a força do amor, da confiança e da bênção de Deus sobre o casal.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/CASA-COLO-DE-DEUS.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Casa',
      label: 'Padrinhos',
      title: 'Casa',
      description:
        'Ao som de "Casa", da Comunidade Colo de Deus, os padrinhos entram como testemunhas de uma história construída com amor e amizade. Pessoas especiais que compartilham alegrias, desafios e a missão de acompanhar o casal em sua nova caminhada.',
    },
  ];

  readonly songSuggestions: SongSuggestion[] = [
    {
      moment: 'Pais e Padrinhos',
      songs: [
        'Eternos amigos - Anjos de Resgate',
        'Sou teu anjo aqui - Anjos de Resgate',
        'Amigos pela fé - Anjos de Resgate',
        'O céu se abre - O Céu Se Abre',
        'Tua Família - Anjos de Resgate',
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
        'Terra Seca - Fraternidade São João Paulo II ',
      ],
    },
    {
      moment: 'Daminhas e Pagens',
      songs: [
        'Amar como Jesus amou - Pe. Marcelo Rossi',
        'Anjos de Deus - Pe. Marcelo Rossi',
        'Mãezinha do céu - Pe. Marcelo Ross',
      ],
    },
    {
      moment: 'Noiva',
      songs: [
        'Ave-Maria',
        'A padroeira',
        'Deixa Deus sonhar em ti - Frei Gilson',
        'Jesus meu esposo - Colo de Deus',
        'O primeiro olhar - Anjos de Resgate',
        'Abraço eterno - Pe. Fabio de Melo',
        'Eis-me aqui - Colo de Deus',
        'Eu Juro - Leandro e Leonardo',
      ],
    },
    {
      moment: 'Evangelho',
      songs: ['Aleluia - CNBB', 'Fala Senhor - CNBB', 'Buscai primeiro - Vencedores Por Cristo'],
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
        'Sacramento da comunhão - Nelsinho Corrêa',
        'Milagre de amor - Juliana de Paula',
        'Ao partir o pão - Walmir Alencar',
        'Mística sublime - Colo de Deus',
        'Incomparável comunhão - Missionário Shalom',
      ],
    },
    {
      moment: 'Após os Votos e Saída dos Noivos',
      songs: [
        'Você e Eu - Eliane Ribeiro',
        'Chuva de graça - Eliane Ribeiro',
        'Águia pequena - Pe. Zezinho',
        'Terra Seca - Fraternidade São João Paulo II ',
        'Oração pela família Pe. Zezinho',
        'Juramento - Pe. Zezinho',
        'Oração do amor - Arianne',
        'Humano amor de Deus - Pe. Fábio',
        'Nossa História - Dunga',
        'Eu te levantarei - Frei Gilson',
        'Eu seguirei - Frei Gilson',
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
