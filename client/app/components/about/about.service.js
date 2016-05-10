class AboutService {
    constructor ($q) {
        'ngInject';
        
        this.$q = $q;
    }
    
    enter (element) {
                    
        let tl = new TimelineLite({ 
            // onComplete: (() => { this.animationComplete() })
        });
        
        let sections = element.find('section');
        
        tl
        .from(sections[0], 0.5, {
            css: {
                x: -80,
                opacity: 0,
                clearProps: 'all'
            }
        })
        .from(sections[1], 0.5, {
            css: {
                x: 80,
                opacity: 0,
                clearProps: 'all'
            }
        }, '-=0.5');
         
    }
    
    leave (element, location) {
        
        // let defer = this.$q.defer();
        
        // let h1 = element.find('h1');
        // let h3 = element.find('h3');
        // let sections = element.find('li');
        
        // let tl = new TimelineLite({
        //     onComplete: (() => { this.animationComplete(defer) })
        // });
        
        // tl.to(h1, 0.5, {
        //     css: {
        //         x: -100,
        //         opacity: 0
        //     }
        // })
        // .to(h3, 0.5, {
        //     css: {
        //         x: 100,
        //         opacity: 0
        //     }
        // }, '-=0.5')
        // .to(sections, 0.5, {
        //     css: {
        //         y: 300,
        //         opacity: 0
        //     }
        // });
        
        // return defer.promise;
        
    }
 
    animationComplete (defer) {
        defer.resolve();
    } 
    
}

export default AboutService;
