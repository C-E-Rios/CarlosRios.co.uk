class ContactController {
    constructor ($element, contactService) {
        'ngInject';
        this.$element = $element;
        this.contactService = contactService;
        this.name = 'contact';
    }
    
    $onInit () {
        this.contactService.enter(this.$element);
    }
}

export default ContactController;
