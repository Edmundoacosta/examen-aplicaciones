import { LibrosPage } from './app.po';

describe('libros App', () => {
  let page: LibrosPage;

  beforeEach(() => {
    page = new LibrosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
