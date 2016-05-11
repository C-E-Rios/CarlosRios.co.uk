class HomeService {
    constructor ($q) {
        'ngInject';
        
        this.$q = $q;
    }
    
    enter (element) {
                    
        let tl = new TimelineLite({ 
            // onComplete: (() => { this.animationComplete() })
        });
        
        let h1 = element.find('h1');
        let h3 = element.find('h3');        
        let appSections = element.find('li');
        
        tl
        .set(h1, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'
        })
        .set(h3, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })
        .set(appSections, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })
        .fromTo(h1, 0.5, {
            css: {
                x: -80,
                opacity: 0
            }
        }, {
            css: {
                x: 0,
                opacity: 1,
                clearProps: 'all'            
            }         
        })
        
        tl.fromTo(h3, 0.5, {
            css: {
                x: 80
            }
        }, {
            css: {
                x: 0,
                clearProps: 'all'
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
                opacity: 1,
                clearProps: 'all'
            }            
        }, '-=0.3'); 
    }
    
    leave (element, location) {
        
        let defer = this.$q.defer();
        
        let h1 = element.find('h1');
        let h3 = element.find('h3');
        let appSections = element.find('li');
        
        let tl = new TimelineLite({
            onComplete: (() => { this.animationComplete(defer) })
        });
        
        tl
        .set(h1, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'
        })
        .set(h3, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })
        .set(appSections, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })        
        .to(h1, 0.3, {
            css: {
                x: -100,
                opacity: 0
            }
        })
        .to(h3, 0.3, {
            css: {
                x: 100,
                opacity: 0
            }
        }, '-=0.3')
        .to(appSections, 0.3, {
            css: {
                y: 80,
                opacity: 0
            }
        });
        
        return defer.promise;
        
    }
 
    animationComplete (defer) {
        defer.resolve();
    } 
    
}

export default HomeService;
