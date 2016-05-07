let topbarAnimation = ($state, $timeout, AppValues) => {

    let enter = (element) => {
        
        console.log('entering...');
                    
        let tl = new TimelineLite({ 
            onComplete: (() => { animationComplete() })
        });
        
        let appSections = element.find('li');
        
        tl.to(appSections, 2, {
            css: {
                opacity: 1
            }
        }) 
    }
    
    let leave = (element) => {
        
    }
    
    let animationComplete = () => {
        $timeout(() => {
            console.log('finsihed');
            // AppValues.app.introAnimationComplete = true;
            // $state.go('home');
        });
    }
    
    return {
        enter,
        leave
    }
};

topbarAnimation.$inject = ['$state', '$timeout', 'AppValues'];

export default topbarAnimation;
