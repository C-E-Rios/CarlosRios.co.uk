class TopbarController {

    constructor($scope, $state) {
        'ngInject';
        
        this.name = 'topbar';
        this.$scope = $scope;
        this.$state = $state;        
                
    }

    $onInit() { 
        // let _this = this;
        // this.$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        // console.log(event);
        //     if (!fromState.abstract) {
        //         _this.app.menu = !_this.app.menu;            
        //     }               
        // });
    }   
    
    toggleMenu () {
        this.app.menu = !this.app.menu;        
    }
    
    showMenu () {       
        return this.$state.current.name !== 'home';
    }
    
}

export default TopbarController;


