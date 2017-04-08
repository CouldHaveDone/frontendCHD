import { CouldHaveDonePage } from './app.po';

describe('could-have-done App', () => {
  let page: CouldHaveDonePage;

  beforeEach(() => {
    page = new CouldHaveDonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
