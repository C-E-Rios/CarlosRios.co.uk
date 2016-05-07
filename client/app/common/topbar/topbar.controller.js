class TopbarController {

    constructor($state, $timeout, $element, AppValues) {
        'ngInject';
        
        this.name = 'topbar';
        this.$state = $state;
        this.$timeout = $timeout;
        // this.AppValues = AppValues;
        this.introAnimation = false;
                
    }
    
    //why is this here??
    toggleMenu () {
        this.app.menu = !this.app.menu;        
    }
    
    atHome () {       
        return this.$state.current.name === 'home';
    }
    
}

export default TopbarController;


