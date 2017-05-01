import { CatchMyBusPage } from './app.po';

describe('catch-my-bus App', () => {
  let page: CatchMyBusPage;

  beforeEach(() => {
    page = new CatchMyBusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
