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
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain(
      'Uma trilha sonora para contar a sua história',
    );

    const nextButton = compiled.querySelectorAll<HTMLButtonElement>('.gallery-nav')[1];
    nextButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain(
      'Mistica sublime',
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
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain('Terra Seca');
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
