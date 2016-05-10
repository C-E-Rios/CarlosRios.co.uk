class MenuController {
    
    constructor($element, $state, menuService) {
        'ngInject';
        this.$element = $element;        
        this.$state = $state;
        this.menuService = menuService;          
        
        this.name = 'menu';     
    }
    
    $onInit () {
        this.menuService.enter(this.$element);
    }
    
    changeRoute (location) {
        // this.menuService.leave(this.$element, location)
        //     .then(() => {
        //         this.menuService.menu = false;
        //         if (location) {
        //             this.$state.go(location);                
        //         }
        //     });
        this.menuService.toggleMenu();
        this.$state.go(location);          
    }

}

export default MenuController;
