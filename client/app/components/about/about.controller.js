class AboutController {
    constructor ($element, aboutService) {
        'ngInject';
        this.$element = $element;
        this.aboutService = aboutService;
        this.name = 'about';
    }
    
    $onInit () {
        this.aboutService.enter(this.$element);
    }
}

export default AboutController;
