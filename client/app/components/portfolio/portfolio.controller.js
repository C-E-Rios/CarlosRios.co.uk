class PortfolioController {
    constructor ($element, $timeout, portfolioService) {
        'ngInject';
        this.$element = $element;
        this.$timeout = $timeout;
        this.portfolioService = portfolioService;
        
        this.name = 'portfolio';
        this.portfolioItems = portfolioService.portfolioItems();    
        
    }
    
    $onInit () {
        // timeout to wait for ng-repeat elements to be ready
        this.$timeout(() => {
            this.portfolioService.enter(this.$element);        
        })
    }

}

export default PortfolioController;
