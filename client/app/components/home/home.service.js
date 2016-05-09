class HomeService {
    constructor ($state) {
        'ngInject';
        this.$state = $state;
    }
    
    enter (element) {
                    
        let tl = new TimelineLite({ 
            onComplete: (() => { this.animationComplete() })
        });
        
        let h1 = element.find('h1');
        let h3 = element.find('h3');        
        let appSections = element.find('li');
        
        tl.fromTo(h1, 0.5, {
            css: {
                x: -80,
                opacity: 0
            }
        }, {
            css: {
                x: 0,
                opacity: 1
            }
        })
        
        tl.fromTo(h3, 0.5, {
            css: {
                x: 80
            }
        }, {
            css: {
                x: 0
            }
        }, '-=0.5')        
        
        tl.fromTo(appSections, 0.5, {
            css: {
                y: 80,
                opacity: 0,
            }
        }, {
            css: {
                y: 0,
                opacity: 1
            }
        }) 
    }
 
    animationComplete () {
        // $timeout(() => {
        //     // AppValues.app.introAnimationComplete = true;
        //     // $state.go('home');
        // });
    } 
    
}

export default HomeService;
