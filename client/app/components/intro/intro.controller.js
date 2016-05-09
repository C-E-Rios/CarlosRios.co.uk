class HomeController {
    constructor ($element, introService) {
        'ngInject';
        
        this.$element = $element;
        this.introService = introService;
        this.name = 'home';

    }
    
    $onInit () {
        this.introService.enter(this.$element);     
    }
    
}

export default HomeController;
