class HomeController {
    constructor ($timeout) {
        'ngInject';
        
        this.name = 'home';
        this.$timeout = $timeout;
        this.intro = false;

    }
    
    $onInit () {
        this.$timeout(() => {
            this.intro = true;      
        });         
    }
    
}

export default HomeController;
