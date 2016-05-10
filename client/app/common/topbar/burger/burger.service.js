class BurgerService {
    constructor () {
    }
    
    enter (element) {
                    
        let tl = new TimelineLite();
        let burger = element[0];
        
        tl
        .set(burger, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })
        .from(burger, 0.3, {
            css: {
                opacity: 0,
                y: -100,
                clearProps: 'all'
            },
            easing: SlowMo.easeIn
        });
    }
    
}

export default BurgerService;
