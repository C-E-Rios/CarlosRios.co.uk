class AppController {
    
    constructor() {
        
        this.name = 'home';
        this.menu = false;
        this.bigLogo = false;
    }
    
    showLogo () {
        this.bigLogo = !this.bigLogo;
    }
    
}

export default AppController;
