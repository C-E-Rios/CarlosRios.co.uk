class AboutService {
    
    constructor () {}
    
    enter (element) {
                    
        let tl = new TimelineLite();
        let sections = element.find('section');
        
        tl
        .set(sections, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'          
        })
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
    
}

export default AboutService;
