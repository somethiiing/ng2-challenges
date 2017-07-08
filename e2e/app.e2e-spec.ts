import { Ng2ChallengesPage } from './app.po';

describe('ng2-challenges App', () => {
  let page: Ng2ChallengesPage;

  beforeEach(() => {
    page = new Ng2ChallengesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
