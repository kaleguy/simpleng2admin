import { SimpleAdminPage } from './app.po';

describe('simple-admin App', function() {
  let page: SimpleAdminPage;

  beforeEach(() => {
    page = new SimpleAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome!');
  });
});
