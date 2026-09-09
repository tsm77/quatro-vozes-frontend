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
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/O-CEU-SE-ABRE-MINISTERIO-ADORACAO-E-VIDA.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando O Céu se Abre',
      label: 'Entrada dos padrinhos',
      title: 'O Céu se Abre',
      description:
        'Ao som de "O Céu se Abre", do Ministério Adoração e Vida, a entrada dos padrinhos ganha um clima de alegria, amizade e gratidão. A música celebra as pessoas que caminham ao lado do casal e ajudam a tornar esse dia ainda mais especial.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/MAEZINHA-DO-CEU-PADRE-MARCELO-ROSSI.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Mãezinha do Céu',
      label: 'Entrada dos pajens e daminhas',
      title: 'Mãezinha do Céu',
      description:
        'Ao som de "Mãezinha do Céu", de Padre Marcelo Rossi, a entrada dos pajens e daminhas ganha ternura, pureza e alegria. A canção traz a delicadeza das crianças para a celebração e recorda o cuidado amoroso de Maria com cada família.',
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
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/PRIMEIRO-OLHAR.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Primeiro Olhar',
      label: 'Assinatura dos padrinhos e fotos',
      title: 'Primeiro Olhar',
      description:
        'Registro em vídeo ao som de Primeiro Olhar, capturando a emoção, a expectativa e a beleza de um instante único, onde os olhares expressam sentimentos que as palavras não conseguem descrever.',
    },
    {
      type: 'video',
      src: 'https://pub-b969b589296345dd9cc3a0018f9d0ff7.r2.dev/JESUS-MEU-ESPOSO-COLO-DE-DEUS.mp4',
      poster: '/assets/foto_oficial.jpeg',
      alt: 'Video do grupo Quatro Vozes Um Sim cantando Jesus Meu Esposo',
      label: 'Entrada da Noiva',
      title: 'Jesus Meu Esposo',
      description:
        'Ao som de "Jesus Meu Esposo", do Colo de Deus, este momento expressa a entrega, a f\u00e9 e o amor de quem escolhe caminhar com Cristo. Uma can\u00e7\u00e3o de profunda intimidade e esperan\u00e7a, que combina com a emo\u00e7\u00e3o da entrada da noiva e com o in\u00edcio de uma nova hist\u00f3ria.',
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
  ];

  readonly songSuggestions: SongSuggestion[] = [
    {
      moment: 'Pais e Padrinhos',
      songs: [
        'Eternos Amigos - Anjos de Resgate',
        'Sou teu anjo aqui - Anjos de Resgate',
        'Amigos pela Fé - Anjos de Resgate',
        'O céu se Abre - Ministério Adoração e Vida',
        'Tua Família - Anjos de Resgate',
        'Casa - Colo de Deus',
        'Utópia - Padre Zezinho',
      ],
    },
    {
      moment: 'Noivo',
      songs: [
        'Pra Sempre - Nicodemos Costa',
        'Simplesmente José - Eugênio Jorge',
        'Te amo e te amarei - Pe. Zezinho',
        'Abraço Eterno - Pe. Fábio',
        'Vou te amar - Marcio Todeschini',
        'Terra Seca - Fraternidade São João Paulo II ',
        'Teus Planos - Juninho Cassimiro',
        'Pescador de Homens - Frei Gilson',
        'Basta Querer - Pe. Marcelo Rossi',
      ],
    },
    {
      moment: 'Daminhas, Pagens e Florista',
      songs: [
        'Amar como Jesus amou - Pe. Marcelo Rossi',
        'Anjos de Deus - Pe. Marcelo Rossi',
        'Mãezinha do céu - Pe. Marcelo Rossi',
        'Escolhi Te Esperar - Marcela Taís',
        'Amar-te Mais - Davidson Silva',
        'Cheiro de Rosas - Colo de Deus',
        'Alecrim Dourado - Músicas Infantis',
      ],
    },
    {
      moment: 'Noiva',
      songs: [
        'Ave-Maria - Gounod (versão português)',
        'A padroeira - Joanna',
        'Deixa Deus Sonhar em ti - Frei Gilson',
        'Jesus meu Esposo - Colo de Deus',
        'Primeiro Olhar - Anjos de Resgate',
        'Abraço Eterno - Pe. Fabio de Melo',
        'Eis-me Aqui - Colo de Deus',
        'Eu Juro - Leandro e Leonardo',
        'Minha História É Sua - Gerados pela Imaculada',
      ],
    },
    {
      moment: 'Evangelho',
      songs: ['Aleluia - CNBB', 'Fala Senhor - CNBB', 'Buscai primeiro - Vencedores Por Cristo'],
    },
    {
      moment: 'Alianças',
      songs: [
        'Cada Dia - Davidson Silva',
        'Eu sei que vou te amar - Tom Jobim',
        'Aliança Verdadeira - Carol Carolo',
        'Essa Aliança - Entretons',
      ],
    },
    {
      moment: 'Comunhão',
      songs: [
        'Sacramento da comunhão - Nelsinho Corrêa',
        'Milagre de Amor - Juliana de Paula',
        'Ao partir o pão - Walmir Alencar',
        'Mística Sublime - Colo de Deus',
        'Incomparável Comunhão - Missionário Shalom',
        'Sacrifício de Amor - Fátima Souza',
        'Ao Teu Encontro - Eliana Ribeiro',
        'Como És Lindo - Vida Reluz',
      ],
    },
    {
      moment: 'Após os Votos e Saída dos Noivos',
      songs: [
        'Você e Eu - Eliane Ribeiro',
        'Chuva de Graça - Eliane Ribeiro',
        'Águia Pequena - Pe. Zezinho',
        'Terra Seca - Fraternidade São João Paulo II ',
        'Oração pela família Pe. Zezinho',
        'Juramento - Pe. Zezinho',
        'Oração do Amor - Arianne',
        'Humano amor de Deus - Pe. Fábio',
        'Nossa História - Dunga',
        'Eu te Levantarei - Frei Gilson',
        'Eu seguirei - Frei Gilson',
        'Céu de Santo Amaro - Flávio Venturini',
        'Aliança - Tribalistas',
        'Dois Corações - Melim',
        'Busque o Alto - Celina Borges',
      ],
    },
    {
      moment: 'Homenagem a entes queridos falecidos',
      songs: [
        'Verdades do tempo - Thiago Brado',
        'Lembre de mim - A Vida É Uma Festa',
        'Estrelinha - Marília Mendonça',
        'Minha Herança - Ana Castela',
        'Quando Se Perde Alguém - André Alves',
        'Casinha Branca - Roberta Campos',
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
