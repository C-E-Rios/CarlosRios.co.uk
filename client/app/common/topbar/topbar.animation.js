let topbarAnimation = ($timeout, AppValues) => {

    let enter = (element) => {
        
        let topbar  = element,
        thinLetter  = angular.element(element[0].querySelectorAll('#thin path')),
        thickLetter = angular.element(element[0].querySelectorAll('#thick path')),
        badge       = angular.element(element[0].querySelector('#badge')),                                                                                              
        img         = element.find('svg');
                    
        let tl = new TimelineLite({ 
            onComplete: (() => { animationComplete() })
        });
        
        tl
        // defaults
        .set(element[0], { 
            z: 0.01, force3D: "true"
        })        
        // .set(img, { 
        //     xPercent: '-50%', 
        //     yPercent: '-50%'
        // })
       
        // draw single stroke cgr
        .staggerFromTo(thinLetter, 0.9, { 
            drawSVG: '0%', 
            transformOrigin: '50% 50%'
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
        .to(topbar, .5, { 
            css: { 
                backgroundColor: '#202126'
            }, 
            ease: Expo.easeInOut 
        }, '-=.6')            

        // morph cgr into thick letters
        .to('.thin-c', 0.4, { 
            morphSVG:'.thick-c', 
            ease: Circ.easeOut
        }, 3.1)
        .to('.thin-g', 0.4, { 
            morphSVG:'.thick-g', 
            ease: Circ.easeOut
        }, 3.1)
        .to('.thin-r', 0.4, { 
            morphSVG:'.thick-r', 
            ease: Circ.easeOut
        }, 3.1)

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
        }, '', "-=.3")

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
                // marginTop: '3.1em', 
                // scale: 0.5
                width: '81px',
                clearProps:"all" 
            },
        })
        .to(logo, 0.4, { 
            css: {
                // top: 0 
            }
        })        
        
        // remove badge stroke
        .to('#badge', 0.2, { 
            stroke: 'none' 
        }, "-=0.8")
        
        // reveal body - topbar height 100 and change color
        .to(topbar, 0.7, { 
            height: '100px', 
            ease: Power4.easeOut 
        }, '-=0.4')
        .to(topbar, 0.3, { 
            backgroundColor: '#626572', 
            ease:Expo.easeInOut
        }, '-=0.9')
        // .to(topbar, 0.4, { alpha: 0, ease: Power4.easeOut });
        
        
        // debugging stuff
        // let paused;
        
        // this.play = () => {
        //     paused = false;            
        //     tl.play();
        // };
        
        // this.pause = () => {
        //     if (paused) {
        //         this.play();
        //         return;
        //     } else {
        //         tl.pause();
        //     }
        //     paused = true;            
        // };
        
        // this.reverse = () => {
        //     tl.reverse();
        // };
        
        // this.resume = () => {
        //     tl.resume();
        // };
        
        // this.restart = () => {
        //     tl.restart();
        // };        
    }
    
    let leave = (element) => {
        
    }
    
    let animationComplete = () => {
        $timeout(() => {
            console.log('finsihed');
            AppValues.app.introAnimationComplete = true;
        });
    }
    
    return {
        enter,
        leave
    }
};

topbarAnimation.$inject = ['$timeout', 'AppValues'];

export default topbarAnimation;
