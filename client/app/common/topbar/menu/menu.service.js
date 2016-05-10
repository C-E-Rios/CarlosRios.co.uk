class MenuService {
    constructor ($q) {
        'ngInject';
        this.$q = $q;
        this.menu = false;
    }
    
    enter (element) {
        let menu    = element,
            nav     = menu.find('nav'),
            footer  = menu.find('footer');
            // thinLetter  = angular.element(element[0].querySelectorAll('#thin path'));
                    
        let tl = new TimelineLite({ 
            onComplete: (() => {  })
        });
        
        tl.fromTo(menu, 0.5, {
            css: {
                opacity: 0,
                y: -100
            }
        }, {
            css: {
                opacity: 1,
                y: 0,
                clearProps: 'all'
            },
            easing: Expo.easeInOut
        });
    }
    
    leave (element) {
        let defer = this.$q.defer();
                
        let menuItem  = element,
            nav     = menuItem.find('nav'),
            footer  = menuItem.find('footer');
            // thinLetter  = angular.element(element[0].querySelectorAll('#thin path'));
                    
        let tl = new TimelineLite({ 
            onComplete: (() => { this.animationComplete(defer) })
        });
        
        tl.fromTo(nav, 0.5, {
            css: {
                opacity: 1,
                y: 0
            }
        }, {
            css: {
                opacity: 0,
                y: -100
            },
            easing: Expo.easeInOut
        })    
        
        return defer.promise;  
    }
    
    animationComplete (defer) {
        defer.resolve();
    }
    
}

export default MenuService;
