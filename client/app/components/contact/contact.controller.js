class ContactController {
    constructor ($element, $timeout, contactService) {
        'ngInject';
        
        this.$element = $element;
        this.$timeout = $timeout;
        this.contactService = contactService;
        this.form = {
            sending: false,
            sent: false
        }
        
        this.name = 'contact';
    }
    
    $onInit () {
        this.contactService.enter(this.$element);
    }
    
    sendMail () {
        this.form.sending = true;
        
        this.contactService.sendMail(this.contact)
            .then(() => {
                this.form.sending = false;
                this.form.sent = true;                
            }, (error) => {
                this.form.sending = false;
                this.form.sent = false;
                console.warn(error);           
            });
    }
    
    closeSentMessage () {
        this.contact = {};
        this.contactForm.$setPristine();
        this.form = { sending: false, sent: false };
    }
}

export default ContactController;
