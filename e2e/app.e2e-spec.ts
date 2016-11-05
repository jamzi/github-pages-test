import { GithubPagesTestPage } from './app.po';

describe('github-pages-test App', function() {
  let page: GithubPagesTestPage;

  beforeEach(() => {
    page = new GithubPagesTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
