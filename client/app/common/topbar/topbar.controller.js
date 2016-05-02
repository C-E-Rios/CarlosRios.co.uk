class TopbarController {

    constructor() {
        this.name = 'topbar';
    }

    $onInit() {
        this.showMenu = this.app.showMenu;
    }    
    
}

export default TopbarController;


