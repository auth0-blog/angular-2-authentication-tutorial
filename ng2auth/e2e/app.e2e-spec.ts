import { Ng2authPage } from './app.po';

describe('ng2auth App', function() {
  let page: Ng2authPage;

  beforeEach(() => {
    page = new Ng2authPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
