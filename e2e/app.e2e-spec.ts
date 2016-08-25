import { Ag2CLIPage } from './app.po';

describe('ag2-cli App', function() {
  let page: Ag2CLIPage;

  beforeEach(() => {
    page = new Ag2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
