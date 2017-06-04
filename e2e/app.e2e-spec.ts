import { AyatkPage } from './app.po';

describe('ayatk.com App', () => {
  let page: AyatkPage;

  beforeEach(() => {
    page = new AyatkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
