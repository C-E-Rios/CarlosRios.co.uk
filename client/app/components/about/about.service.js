class AboutService {
    
    constructor () {}
    
    enter (element) {
                    
        let tl = new TimelineLite();
        let articles = element.find('article');
        
        tl
        .set(articles, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'          
        })
        .from(articles[0], 0.5, {
            css: {
                x: -80,
                opacity: 0,
                clearProps: 'all'
            }
        })
        .from(articles[1], 0.5, {
            css: {
                x: 80,
                opacity: 0,
                clearProps: 'all'
            }
        }, '-=0.5');
         
    }
    
}

export default AboutService;
