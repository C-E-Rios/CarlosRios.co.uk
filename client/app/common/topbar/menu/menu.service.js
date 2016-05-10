class MenuService {
    constructor ($q, $document) {
        'ngInject';
        this.$q = $q;
        this.$document = $document;
        this.menu = false;
    }
    
    enter (element) {
        let menu    = element,
            nav     = menu.find('nav'),
            footer  = menu.find('footer');
                    
        let tl = new TimelineLite({ 
            onComplete: (() => {  })
        });
        
        tl
        .set(nav, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })
        .set(footer, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })        
        .from(nav, 0.3, {
            css: {
                opacity: 0,
                y: -100,
                clearProps: 'all'
            },
            easing: SlowMo.easeIn            
        })
        .from(footer, 0.3, {
            css: {
                opacity: 0,
                clearProps: 'all'
            }
        }, '-=0.3');
    }
    
    leave (element) {
        let defer = this.$q.defer();
                
        let menuItem  = element,
            nav     = menuItem.find('nav'),
            footer  = menuItem.find('footer');
                    
        let tl = new TimelineLite({ 
            onComplete: (() => { this.animationComplete(defer) })
        });
        
        tl
        .set(nav, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })     
        .fromTo(nav, 0.5, {
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
    
    toggleMenu () {
        this.menu = !this.menu;
        
        // prevent scrolling when menu is open
        let bodyRef = angular.element( this.$document[0].body );        
        if (this.menu) {
            bodyRef.addClass('ovh');
        } else {
            bodyRef.removeClass('ovh');
        }         
    }
    
}

export default MenuService;
