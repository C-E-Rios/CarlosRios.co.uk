class ContactService {
    
    constructor ($http) {
        'ngInject';
        this.$http = $http;
    }
    
    enter (element) {
                    
        let tl = new TimelineLite();
        let sayHello = element.find('article')[0];
        let form = element.find('form');        
        let socialContainer = angular.element(element[0].querySelectorAll('.social-container'));

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
                     
        .from(sayHello, 0.3, {
            css: {
                y: -80,
                opacity: 0,
                clearProps: 'all'
            }
        })
        .from(form, 0.3, {
            css: {
                x: 80,
                opacity: 0,
                clearProps: 'all'
            }
        })
        .from(socialContainer, 0.3, {
            css: {
                x: -80,
                opacity: 0,
                clearProps: 'all'
            }
        }, '-=0.3');              
         
    }
    
    sendMail (contact) {
        let postIt = 'https://api.pepipost.com/api/web.send.json',
            postmarkData = {
                'fromname': 'Mr. Bot',
                'subject': 'Mr. Bot - Query from ' + contact.name + ', ' + contact.email,
                'from': 'bot@carlosrios.co.uk',
                'content': contact.message            
            },  
            data = {
                'api_key': '887d86ee66edde90a022aa2b2a9d9402',
                'email_details': postmarkData,
                'recipients': ['hello@carlosrios.co.uk']
            };
        
        return this.$http.post(postIt, data);                
    }
    
}

export default ContactService;
