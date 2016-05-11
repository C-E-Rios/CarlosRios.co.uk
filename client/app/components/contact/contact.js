import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactComponent from './contact.component';
import contactService from './contact.service';

let contactModule = angular.module('contact', [
    uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    
    $stateProvider
        .state('contact', {
            url: '/contact',
            template: '<contact></contact>'
        });
})
.component('contact', contactComponent)
.service('contactService', contactService);

export default contactModule;