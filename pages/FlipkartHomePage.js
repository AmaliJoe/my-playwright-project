class FlipkartHomePage {
    constructor(page) {

        this.page = page;
        this.phoneInput = page.locator('input.jwCbxy');
        this.continueButton = page.getByRole('button',{name:'Continue'});
        this.searchBox = page.locator('input.nw1UBF.v1zwn26:not([readonly]):visible');
        
    }

    async goto()
    {
        await this.page.goto('https://www.flipkart.in/');
    }

    async login(phoneNumber)
    {
        await this.phoneInput.fill(phoneNumber);
        await this.continueButton.click();        

    }

    async search(term)
    {
        await this.searchBox.fill(term);
        await this.searchBox.press('Enter');
    }

}

module.exports = {FlipkartHomePage};