import { AngIdeaBoxPage } from './app.po';

describe('ang-idea-box App', function() {
  let page: AngIdeaBoxPage;

  beforeEach(() => {
    page = new AngIdeaBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
