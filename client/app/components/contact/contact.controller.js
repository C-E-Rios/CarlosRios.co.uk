class ContactController {
    constructor ($element, $http, contactService) {
        'ngInject';
        
        this.$element = $element;
        this.$http = $http;
        this.contactService = contactService;
        this.name = 'contact';
    }
    
    $onInit () {
        this.contactService.enter(this.$element);
    }
    
    sendMail () {
        let postIt = 'https://api.postmarkapp.com/email';
        
        let data = {
            From : 'bot@carlosrios.co.uk', 
            To: 'hello@carlosrios.co.uk', 
            Subject: 'Hello from Postmark', 
            HtmlBody: '<p>Hello</p>'
        };
        
        this.$http({
        url: 'https://api.pepipost.com/api/web.send.json',
        method: 'POST',
        data: {
            "api_key": "887d86ee66edde90a022aa2b2a9d9402",
            "email_details": {
                "fromname": "Mr. Bot",
                "subject": "this is test email subject",
                "from": "bot@carlosrios.co.uk",
                "content": "<p> hi, this is a test email sent via Pepipost JSON API.</p>"
            },
            "recipients": [
                "hello@carlosrios.co.uk"
            ]
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).
        
        success(function (data) {
            console.log('ye');
            console.log(data);
        }).
        error(function (data) {
            console.log('nope');
            console.warn(data);
        });             
        
        // this.$http.post(postIt, angular.toJson(data), {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'X-Postmark-Server-Token' : 'e1e1d7ea-ff7b-4556-a52a-2d6b6a63cea5'
        //         }
        //     })
        //     .then((res) => {
        //         console.log('success', res);
        //     }, (res) => {
        //         console.log('error', res);                
        //     });
    }
}

export default ContactController;
