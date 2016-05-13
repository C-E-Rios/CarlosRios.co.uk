class IntroService {
    constructor ($state, $timeout, $window) {
        'ngInject'
        this.$state = $state;
        this.$timeout = $timeout;
        this.$window = $window;
    }
    
    enter (element) {
        let intro   = element,
        introBg     = angular.element(element[0].querySelectorAll('.intro')),
        thinLetter  = angular.element(element[0].querySelectorAll('#thin path')),
        thickLetter = angular.element(element[0].querySelectorAll('#thick path')),
        badge       = angular.element(element[0].querySelector('#badge')),                                                                                              
        logo        = element.find('svg'),
        logoSize = {
            top: this.$window.outerWidth > 768 ? '2' : '2',
            width: this.$window.outerWidth > 768 ? '81px' : '61px'
        } 
                    
        let tl = new TimelineLite({ 
            onComplete: (() => { this.animationComplete() })
        });
                
        tl
        //defaults 
        .timeScale(1.3)      
        .set(introBg, { 
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'
        })
        .set(thinLetter, { 
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'
        }) 
        .set(thickLetter, {
            opacity: 0, 
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'
        })
        .set(badge, { 
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'
        }) 
        .set(logo, {
            display: 'block', 
            z: 0.01, 
            force3D: 'true',
            xPercent: '-50%',
            yPercent: '-50%',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'
        })
               
        // draw single stroke cgr
        .staggerFromTo(thinLetter, 0.9, { 
            drawSVG: '0%'
        }, { 
            drawSVG: '100%', 
            ease: Expo.easeInOut
        }, 0.6)

        // draw single stroke badge
        .fromTo(badge, 1, { 
            drawSVG:'0%' 
        }, {
            drawSVG:'100%', 
            ease: Expo.easeInOut 
        })
        
        // change background to dark navy    
        .to(introBg, .5, { 
            css: { 
                backgroundColor: '#202126'
            }, 
            ease: Expo.easeInOut 
        }, '-=.6')            

        // morph cgr into thick letters
        .to('.thin-c', 0.4, { 
            morphSVG:'.thick-c', 
            ease: Circ.easeOut
        }, 2.5)
        .to('.thin-g', 0.4, { 
            morphSVG:'.thick-g', 
            ease: Circ.easeOut
        }, 2.5)
        .to('.thin-r', 0.4, { 
            morphSVG:'.thick-r', 
            ease: Circ.easeOut
        }, 2.5)

        // show thick letter fill
        .staggerFromTo(thickLetter, 0.4, {
            css: { 
                opacity: 0
            }
        }, {
            css: {
                opacity: 1
            }, 
            ease: Power4.easeIn
        }, '', "-=.6")

        // hide single stroke
        .staggerFromTo(thinLetter, 0.3, {
            css: {
                opacity: 1
            }
        }, {
            css: {
                opacity: 0            
            },
            ease: Expo.easeOut 
        }, '', "-=.2")

        // .to(badge, 1, {rotation: 360, transformOrigin: 'center, center'})
        // problem with firefox =
        // .to(logo, 0.1, {
        //     css: {
        //         scaleY: 0.7,
        //         scaleX: 1.3, 
        //         transformOrigin: '50% 100%'
        //     },
        //     ease:Quad.easeOut
        // })        
        
        // make logo smaller and move to top
        .to(logo, 0.3, { 
            css: {
                y: logoSize.top, 
                width: logoSize.width             
            },
        })        
        
        // remove badge stroke
        .to(badge, 0.2, { 
            stroke: 'none' 
        }, "-=0.8")
        
        // reveal body - intro height 100 and change color
        .to(introBg, 0.7, { 
            height: '90px', 
            ease: Power4.easeOut 
        }, '-=0.4')
        .to(introBg, 0.3, { 
            backgroundColor: '#363740', 
            ease:Expo.easeInOut
        }, '-=0.9')
        // .to(intro, 0.4, { alpha: 0, ease: Power4.easeOut });
      
    }
    
    animationComplete () {
        this.$state.go('home');  
    }
    
}

export default IntroService;
