class HomeController {
    
    constructor ($element, homeService) {
        'ngInject';
        this.$element = $element;
        this.homeService = homeService;
        
        this.name = 'home';
    }
    
    $onInit () {
        this.homeService.enter(this.$element);        
    }    
}

export default HomeController;
