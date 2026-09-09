import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the site title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Quatro Vozes');
    expect(compiled.querySelector('h1')?.textContent).toContain('Um Sim');
  });

  it('should navigate the gallery carousel', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain(
      'Uma trilha sonora para contar a sua história',
    );

    const nextButton = compiled.querySelectorAll<HTMLButtonElement>('.gallery-nav')[1];
    nextButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain(
      app.galleryItems[1].title,
    );
  });

  it('should render the gallery video with controls', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;

    app.setGalleryPhoto(1);
    fixture.detectChanges();

    const video = compiled.querySelector<HTMLVideoElement>('video.gallery-video');
    expect(video).toBeTruthy();
    expect(video?.hasAttribute('controls')).toBe(true);
    expect(video?.getAttribute('src')).toBe(app.galleryItems[1].src);
  });

  it('should switch between gallery videos', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;

    app.setGalleryPhoto(1);
    fixture.detectChanges();
    expect(compiled.querySelector<HTMLVideoElement>('video.gallery-video')?.getAttribute('src')).toBe(
      app.galleryItems[1].src,
    );

    const nextButton = compiled.querySelectorAll<HTMLButtonElement>('.gallery-nav')[1];
    nextButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector<HTMLVideoElement>('video.gallery-video')?.getAttribute('src')).toBe(
      app.galleryItems[2].src,
    );
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain(
      app.galleryItems[2].title,
    );
  });

  it('should render the Eu Juro gallery video', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    const euJuroIndex = app.galleryItems.findIndex((item) => item.title === 'Eu Juro');

    expect(euJuroIndex).toBeGreaterThanOrEqual(0);

    app.setGalleryPhoto(euJuroIndex);
    fixture.detectChanges();

    const euJuroItem = app.galleryItems[euJuroIndex];
    const video = compiled.querySelector<HTMLVideoElement>('video.gallery-video');

    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain('Eu Juro');
    expect(video?.getAttribute('src')).toBe(euJuroItem.src);
    expect(video?.getAttribute('aria-label')).toBe(euJuroItem.alt);
    expect(video?.hasAttribute('controls')).toBe(true);
  });

  it.each(['Chuva de graça', 'Sinal do meu amor', 'Casa'])(
    'should render the %s gallery video',
    (title) => {
      const fixture = TestBed.createComponent(App);
      const app = fixture.componentInstance;
      const compiled = fixture.nativeElement as HTMLElement;
      const videoIndex = app.galleryItems.findIndex((item) => item.title === title);

      expect(videoIndex).toBeGreaterThanOrEqual(0);

      app.setGalleryPhoto(videoIndex);
      fixture.detectChanges();

      const galleryItem = app.galleryItems[videoIndex];
      const video = compiled.querySelector<HTMLVideoElement>('video.gallery-video');

      expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain(title);
      expect(video?.getAttribute('src')).toBe(galleryItem.src);
      expect(video?.getAttribute('aria-label')).toBe(galleryItem.alt);
      expect(video?.hasAttribute('controls')).toBe(true);
    },
  );

  it('should show the music description for each video', () => {
    const initialFixture = TestBed.createComponent(App);
    const videoItems = initialFixture.componentInstance.galleryItems.filter(
      (item) => item.type === 'video',
    );

    for (const item of videoItems) {
      const fixture = TestBed.createComponent(App);
      const app = fixture.componentInstance;
      const compiled = fixture.nativeElement as HTMLElement;
      const videoIndex = app.galleryItems.findIndex((galleryItem) => galleryItem.title === item.title);

      app.setGalleryPhoto(videoIndex);
      fixture.detectChanges();

      const description = compiled.querySelector('.gallery-description');
      expect(description?.textContent).toContain('Sobre a m\u00fasica:');
      expect(description?.textContent).toContain(item.description);
    }
  });

  it('should render the Jesus Meu Esposo gallery video and description', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    const videoIndex = app.galleryItems.findIndex((item) => item.title === 'Jesus Meu Esposo');

    expect(videoIndex).toBeGreaterThanOrEqual(0);

    app.setGalleryPhoto(videoIndex);
    fixture.detectChanges();

    const video = compiled.querySelector<HTMLVideoElement>('video.gallery-video');
    expect(video?.getAttribute('src')).toBe(app.galleryItems[videoIndex].src);
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain('Jesus Meu Esposo');
    expect(compiled.querySelector('.gallery-description')?.textContent).toContain(
      app.galleryItems[videoIndex].description,
    );
  });

  it('should render O Céu se Abre for the padrinhos entrance', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    const videoIndex = app.galleryItems.findIndex((item) => item.title === 'O Céu se Abre');

    expect(videoIndex).toBeGreaterThanOrEqual(0);

    app.setGalleryPhoto(videoIndex);
    fixture.detectChanges();

    expect(compiled.querySelector('.gallery-copy > span')?.textContent).toContain(
      'Entrada dos padrinhos',
    );
    expect(compiled.querySelector('.gallery-description')?.textContent).toContain(
      app.galleryItems[videoIndex].description,
    );
    expect(compiled.querySelector<HTMLVideoElement>('video.gallery-video')?.getAttribute('src')).toBe(
      app.galleryItems[videoIndex].src,
    );
  });

  it('should render Mãezinha do Céu for the pajens and daminhas entrance', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    const videoIndex = app.galleryItems.findIndex((item) => item.title === 'Mãezinha do Céu');

    expect(videoIndex).toBeGreaterThanOrEqual(0);

    app.setGalleryPhoto(videoIndex);
    fixture.detectChanges();

    expect(compiled.querySelector('.gallery-copy > span')?.textContent).toContain(
      'Entrada dos pajens e daminhas',
    );
    expect(compiled.querySelector('.gallery-description')?.textContent).toContain(
      app.galleryItems[videoIndex].description,
    );
    expect(compiled.querySelector<HTMLVideoElement>('video.gallery-video')?.getAttribute('src')).toBe(
      app.galleryItems[videoIndex].src,
    );
  });

  it('should render wedding song suggestions', () => {
    const fixture = TestBed.createComponent(App);
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.textContent).toContain('Pais e Padrinhos');
    expect(compiled.textContent).toContain('Você e Eu - Eliane Ribeiro');
  });

  it('should render contact links', () => {
    const fixture = TestBed.createComponent(App);
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(
      compiled.querySelector('a[href*="instagram.com/quatrovozesumsim_casamentos"]'),
    ).toBeTruthy();
    expect(compiled.querySelector('a[href*="wa.me"]')).toBeTruthy();
    expect(compiled.textContent).toContain('Porque alguns momentos passam.');
    expect(compiled.textContent).toContain("O seu 'sim' merece ser eterno.");
  });
});
