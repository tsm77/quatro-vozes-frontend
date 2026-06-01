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
      'Harmonia para a entrada dos noivos',
    );

    const nextButton = compiled.querySelectorAll<HTMLButtonElement>('.gallery-nav')[1];
    nextButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.gallery-copy h3')?.textContent).toContain(
      'Trilha suave para o ponto mais simbolico',
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
  });
});
