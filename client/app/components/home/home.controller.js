class HomeController {
    
    constructor ($scope, $state, $element, homeService) {
        'ngInject';
        this.$element = $element;
        this.$state = $state;
        this.homeService = homeService;
        
        this.name = 'home';
        
        // $stateChangeStart bug
        // $scope.$on('$stateChangeStart', (event, toParams) => {
        //     event.preventDefault();
        //     let state = toParams.name;
        //     this.homeService.leave(this.$element, state)
        //         .then(() => {
        //             this.$state.go(state);
        //             return;
        //         })
        // })
    }
    
    $onInit () {
        this.homeService.enter(this.$element);        
    }
    
    changeRoute (state) {
        this.homeService.leave(this.$element, state)
            .then(() => {
                this.$state.go(state);
            })
    }
        
}

export default HomeController;
