class PortfolioItemController {
    constructor ($element, portfolioItemService) {
        'ngInject';
        this.$element = $element;
        this.portfolioItemService = portfolioItemService;
        this.name = 'portfolioItem';
            
    }
    
    hoverEnter ($event) {
        this.portfolioItemService.hoverEnter(this.$element, $event)
    }
    
    hoverLeave ($event) {
        this.portfolioItemService.hoverLeave(this.$element, $event)
    }    
    
}

export default PortfolioItemController;
