class BurgerController {
    constructor ($element, burgerService) {
        'ngInject';
        
        this.burgerService = burgerService;
        this.$element = $element;
        
        this.name = 'burger';
        
    }
    
    $onInit () {
        this.burgerService.enter(this.$element);
    }
}

export default BurgerController;
