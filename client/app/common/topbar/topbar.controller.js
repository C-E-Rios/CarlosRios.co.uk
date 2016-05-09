class TopbarController {

    constructor($state, $element, menuService) {
        'ngInject';
        
        this.$state = $state;
        
        this.name = 'topbar';
        this.menuService = menuService;
                
    }
    
    toggleMenu () {
        this.menuService.menu = !this.menuService.menu;        
    }
    
    atHome () {       
        return this.$state.current.name === 'home';
    }
    
}

export default TopbarController;


