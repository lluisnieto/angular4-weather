import { Angular4WeatherPage } from './app.po';

describe('angular4-weather App', function() {
  let page: Angular4WeatherPage;

  beforeEach(() => {
    page = new Angular4WeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
