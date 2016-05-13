class TopbarController {

    constructor($document, $state, $element, menuService) {
        'ngInject';
        
        this.$state = $state;
        this.$document = $document;
        
        this.name = 'topbar';
        this.menuService = menuService;
                
    }
    
    toggleMenu (event) {
        this.menuService.toggleMenu(event);       
    }
    
    atHome () {       
        return this.$state.current.name === 'home';
    }
    
}

export default TopbarController;


