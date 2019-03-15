class HomePage {

    constructor (page) {
        this.page = page; 
        this.searchButtonLocator = "#search-button"
        this.searchLocator = 'input#search-input-field';
        this.submitButtonLocator = '#submit-button'       
    };

    async visit(id) {
        
        await this.page.goto(global.baseUrl, {
            waitUntil: 'load'
        }); 
    }; 

    async fillInSearchBox(query) {
        await this.page.type(this.searchLocator, query);
    };

    async clickSearch () {
        await this.page.click(this.searchButtonLocator);
    };   

    async submitSearch () {
        await this.page.click(this.submitButtonLocator);
    };    
      
    async executeSearch(text) {

        await this.clickSearch();
        await this.fillInSearchBox(text);
        await this.submitSearch();
    }    
}

module.exports = HomePage; 