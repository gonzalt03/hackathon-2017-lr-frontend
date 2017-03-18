import { OpenDataHackatonPage } from './app.po';

describe('open-data-hackaton App', () => {
  let page: OpenDataHackatonPage;

  beforeEach(() => {
    page = new OpenDataHackatonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
