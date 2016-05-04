class MenuController {
    
    constructor($timeout) {
        'ngInject';
        this.name = 'menu';
        this.$timeout = $timeout;
    }
    
    toggleMenu () {
        this.$timeout(() => {
            this.app.menu = !this.app.menu;
        });
                
    }    
    
}

export default MenuController;
