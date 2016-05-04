class IntroAnimationController {
    
    constructor($scope, $element) {
        'ngInject';
        
        this.$scope = $scope;
        this.$element = $element;

    }

    $onInit () {
        TweenLite.from(this.$element, 3, { y: 50, alpha: 0 });        
    }

    animate () {
        var tl = new TimelineLite()
            .to(this.$element, 5, { width: 0, height: 0, padding: 0, autoAlpha: 0 });
    } 
    
}

export default IntroAnimationController;
