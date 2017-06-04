import { Ayatk.ComPage } from './app.po';

describe('ayatk.com App', () => {
  let page: Ayatk.ComPage;

  beforeEach(() => {
    page = new Ayatk.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
