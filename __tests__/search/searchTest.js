const homePage = require('../../pageObjects/cnnHomePage');
const searchResults = require('../../pageObjects/cnnSearchResultPage');
const timeout = 10000;
const nfl = 'NFL';
const fakeNfl = 'NFLFake';

describe('search', () => {
    let page
    jest.setTimeout(15000);
    beforeAll(async() => {
    
        page = await global.browser.newPage();
        await page._client.send( 'Emulation.clearDeviceMetricsOverride' );
        HomePage = new homePage (page);
        SearchResults = new searchResults(page); 
        await HomePage.visit();
    });
    
    it('should not show error message when there are results ', async () => {
        await HomePage.executeSearch(nfl);
        await SearchResults.awaitResults();
        const errorShown = await SearchResults.isErrrorMessageShown();
        expect(errorShown).toBeFalsy();
    })

    it('should show error message when there are no results ', async () => {
        await HomePage.executeSearch(fakeNfl);
        await SearchResults.awaitNoResults();
        const errorShown = await SearchResults.isErrrorMessageShown();
        expect(errorShown).toBeTruthy();
    })
  }, timeout
)
