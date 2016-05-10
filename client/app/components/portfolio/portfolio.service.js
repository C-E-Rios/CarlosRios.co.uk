class PortfolioService {
    constructor ($q) {
        'ngInject';
        
        this.$q = $q;
    }
    
    enter (element) {
                    
        let tl = new TimelineLite();
        let sections = element.find('portfolio-item');
        
        tl
        .staggerFrom(sections, 0.3, {
            css: {
                x: 80,
                opacity: 0,
                clearProps: 'all'
            }
        }, 0.1);
         
    }
    
    portfolioItems () {
        return [
            {
                1: {
                    title: 'Chwz.it',
                    description: 'This is a rails based project I embarked on to gain a fullstack perspective on the development process. Users can post content and edit their profiles.',
                    img: {
                        src: 'assets/images/chwzit.png'
                    },
                    state: 'chwzit',
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

                    title: 'Detodo',
                    description: 'DETODO was designed for a client wishing to self-manage his favourite video content on the internet.',
                    img: {
                        src: 'assets/images/detodo.png'
                    },
                    state: 'detodo',
                    width: '2-5'
                },
                2: {
                    title: 'Infosecurity Mag',
                    description: 'An example of a client-wide compatible HTML email. All e-mails are designed to look beautiful in all major clients.',
                    img: {
                        src: 'assets/images/infosecurity.png'
                    },
                    state: 'infosecurity',
                    width: '3-5'                        
                }
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
                    title: 'Chwz.it',
                    description: 'This is a rails based project I embarked on to gain a fullstack perspective on the development process. Users can post content and edit their profiles.',
                    img: {
                        src: 'assets/images/chwzit.png'
                    },
                    state: 'chwzit',
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
