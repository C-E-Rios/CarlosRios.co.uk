class ContactService {
    
    constructor () {}
    
    enter (element) {
                    
        let tl = new TimelineLite();
        let sayHello = element.find('section')[0];
        let form = element.find('form');        
        let socialContainer = angular.element(element[0].querySelectorAll('.social-container'));
        let footer = element.find('footer');
        let performanceHacks = {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'          
        };
        
        tl
        .set(sayHello, performanceHacks)
        .set(form, performanceHacks)
        .set(socialContainer, performanceHacks)
        .set(footer, performanceHacks)              
                     
        .from(sayHello, 0.3, {
            css: {
                y: -80,
                opacity: 0,
                clearProps: 'all'
            }
        })
        .from(form, 0.3, {
            css: {
                x: -80,
                opacity: 0,
                clearProps: 'all'
            }
        })
        .from(socialContainer, 0.3, {
            css: {
                x: 80,
                opacity: 0,
                clearProps: 'all'
            }
        }, '-=0.3')
        .from(footer, 0.3, {
            css: {
                opacity: 0,
                clearProps: 'all'
            }
        }, '-=0.3');                
         
    }
    
}

export default ContactService;
