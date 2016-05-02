class RootController {
    constructor() {
        
        let self = this;
        
        this.name = 'home';
        this.menu = false;
        
        this.showMenu = showMenu;
        
        function showMenu () {
            console.log(self.menu);
            self.menu = !self.menu;            
        }
        
    }
}

export default RootController;
