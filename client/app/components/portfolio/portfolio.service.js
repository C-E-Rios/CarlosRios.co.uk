class PortfolioService {
    constructor ($q) {
        'ngInject';
        
        this.$q = $q;
    }
    
    enter (element) {
                    
        let tl = new TimelineLite();
        let sections = element.find('portfolio-item');
        
        tl
        .set(sections, {
            z: 0.01, 
            force3D: 'true',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0);',
            backfaceVisibility: 'hidden'            
        })
        .staggerFromTo(sections, 0.3, {
            css: {
                x: 80,
                autoAlpha: 0
            }
        },{
            css: {
                x: 0,
                autoAlpha: 1,
                clearProps: 'transform, backfaceVisibility, boxShadow'
            }
        }, 0.1);
         
    }
    
    portfolioItems () {
        return [
            {
                1: {
                    title: 'tillr.io',
                    description: 'tillr is a flexible, easy to use cloud-based audit and inspection tool, saving operational managers valuable time and increasing their productivity',
                    img: {
                        src: 'assets/images/tillr.png'
                    },
                    state: 'tillr',
                    width: '3-5'
                },
                2: {

                    title: 'Black Eagle Vision',
                    description: 'This is a responsive website built for a production company. Branding and logo design was also part of this project.',
                    img: {
                        src: 'assets/images/bev.png'
                    },
                    state: 'bev',
                    width: '2-5'
                }
            },
            {
                1: {
                    title: 'Chwz.it',
                    description: 'This is a node based project I embarked on to gain a fullstack perspective on the development process. Users can post content and edit their profiles.',
                    img: {
                        src: 'assets/images/chwzit2.png'
                    },
                    state: 'chwzit',
                    width: '2-5'
                },                
                2: {
                    title: 'Blackthorn',
                    description: 'An application built to allow complex communications between two government agencies. It provides a great user experience amidst a very complex workflow.',
                    img: {
                        src: 'assets/images/blackthorn.png'
                    },
                    state: 'blackthorn',
                    width: '3-5'                        
                },
            },
            {
                1: {
                    title: '58 Labs',
                    description: 'A responsive photography website built on WordPress.',
                    img: {
                        src: 'assets/images/58labs.png'
                    },
                    state: '58labs',
                    width: '1-3'                        
                },
                2: {

                    title: 'Detodo',
                    description: 'DETODO was designed for a client wishing to self-manage his favourite video content on the internet.',
                    img: {
                        src: 'assets/images/detodo.png'
                    },
                    state: 'detodo',
                    width: '1-3'
                },
                3: {
                    
                    title: 'Enterprise Preston',
                    description: 'This responsive website was built for an NGO, to promote business in the UK. UX was important here as the organisation deals with various stakeholders.',
                    img: {
                        src: 'assets/images/preston.png'
                    },
                    state: 'enterprisep',
                    width: '1-3'                        
                }
            }
        ]; 
    }
    
}

export default PortfolioService;
