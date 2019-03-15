class SearchResult {

    constructor (page) {
        this.page = page; 
        this.errorMessageLocator = '.cnn-search__no-results';
        this.resultsPageTitle = '.cnn-search__results';
    };

    async awaitResults() {
        await this.page.waitForSelector(this.resultsPageTitle);
    };

    async awaitNoResults() {
        await this.page.waitForSelector(this.errorMessageLocator);
    };

    async isErrrorMessageShown() {
        if (await this.page.$(this.errorMessageLocator) !== null) return true
            else return false 
}; 

    
}

module.exports = SearchResult; 