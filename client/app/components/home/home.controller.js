class HomeController {
    
    constructor ($timeout) {
        'ngInject';
        
        this.name = 'home';
        this.$timeout = $timeout;
        this.homeReady = false;
    }
    
    $onInit () {
        this.$timeout(() => {
            console.log('home ready');
            this.homeReady = true;      
        });         
    }    
}

export default HomeController;
