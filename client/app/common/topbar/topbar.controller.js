class TopbarController {

    constructor($state, $timeout, $element, AppValues) {
        'ngInject';
        
        this.name = 'topbar';
        this.$state = $state;
        this.$timeout = $timeout;
        this.$element = $element;
        this.AppValues = AppValues;        
                
    }
    
    $onInit () {
        
        this.checkIfHome();
        
        console.log(this.AppValues);
        
        let topbar    = angular.element(this.$element[0].querySelector('.topbar')),
            thinLetter  = angular.element(this.$element[0].querySelectorAll('#thin path')),
            thickLetter = angular.element(this.$element[0].querySelectorAll('#thick path')),
            badge       = angular.element(this.$element[0].querySelector('#badge')),                                                                                              
            img         = this.$element.find('svg'),
            imgWBase    = img[0].width.baseVal.value;
                    
        let tl = new TimelineLite({ 
            onComplete: (() => { this.animationComplete() })
        });
        
        tl

        .set(img ,{xPercent: '-50%', yPercent: '-50%'})
        .set(img, {scale: '0.99'})

        .staggerFromTo(thinLetter, 0.9, 
            { drawSVG: '0%', scale:.9, transformOrigin: '50% 50%'}, 
            { drawSVG: '100%', scale:1, ease: Expo.easeInOut}, 0.6)

        .fromTo(badge, 1, 
            { drawSVG:'0%' }, 
            {drawSVG:'100%', ease: Expo.easeInOut })
            
        .to(topbar, .5, { css:{backgroundColor: '#202126'}, ease: Expo.easeInOut }, '-=.6')

        // .to(img, .3, { css:{width: '-=30'}, ease: Expo.easeOut })                    
        // .to(img, .6, { css:{width: '55%'}, ease: Back.easeOut })            

        .to('.thin-c', 0.4, {morphSVG:'.thick-c', ease: Circ.easeOut}, 3.1)
        .to('.thin-g', 0.4, {morphSVG:'.thick-g', ease: Circ.easeOut}, 3.1)
        .to('.thin-r', 0.4, {morphSVG:'.thick-r', ease: Circ.easeOut}, 3.1)

        .staggerFromTo(thickLetter, 0.4, 
            {css:{opacity: 0} },         
            {css:{opacity: 1}, ease: Power4.easeIn }, '', "-=.3")

        .staggerFromTo(thinLetter, 0.3, 
            {alpha: 1},         
            {alpha: 0, ease: Expo.easeOut }, '', "-=.2")

        // .to(logo, 0.3, { css:{ marginTop: '3em'}, ease: Expo.easeInOut })
        .to(logo, 0.3, { css:{ marginTop: '3.1em', width: '81px'} })
        .to(logo, 0.4, { top: 0 })        
        
        .to('#badge', 0.2, { stroke: 'none' }, "-=0.8")
                
        .to(topbar, 0.7, { height: '100px', ease: Power4.easeOut }, '-=0.4')
        .to(topbar, 0.3, { backgroundColor: '#626572', ease:Expo.easeInOut}, '-=0.9')
        // .to(topbar, 0.4, { alpha: 0, ease: Power4.easeOut });
        
        
        // debugging stuff
        
        let paused;
        
        this.play = () => {
            paused = false;            
            tl.play();
        };
        
        this.pause = () => {
            if (paused) {
                this.play();
                return;
            } else {
                tl.pause();
            }
            paused = true;            
        };
        
        this.reverse = () => {
            tl.reverse();
        };
        
        this.resume = () => {
            tl.resume();
        };
        
        this.restart = () => {
            tl.restart();
        };
                                      
    }

    checkIfHome () {
        if (this.$state.$current.name === 'home')  { 
            this.AppValues.app.introAnimation = true;
        }
    }

    animationComplete () {
        this.$timeout(() => {
            // this.AppValues.introAnimationComplete = true;
        });
    }    
    
    toggleMenu () {
        this.app.menu = !this.app.menu;        
    }
    
    showMenu () {       
        return this.$state.current.name !== 'home';
    }
    
}

export default TopbarController;


