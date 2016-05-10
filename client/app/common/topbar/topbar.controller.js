class TopbarController {

    constructor($document, $state, $element, menuService) {
        'ngInject';
        
        this.$state = $state;
        this.$document = $document;
        
        this.name = 'topbar';
        this.menuService = menuService;
                
    }
    
    toggleMenu () {
        this.menuService.toggleMenu();       
    }
    
    atHome () {       
        return this.$state.current.name === 'home';
    }
    
}

export default TopbarController;


