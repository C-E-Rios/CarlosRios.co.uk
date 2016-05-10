import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import aboutService from './about.service';
import { ExternalLogger } from '../../../../vendor/LogDecorator';

let aboutModule = angular.module('about', [
    uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    
    $stateProvider
        .state('about', {
            url: '/about',
            template: '<about></about>'
        });
})
.component('about', aboutComponent)
.service('aboutService', aboutService);

let $log = new ExternalLogger();
    $log = $log.getInstance( 'BOOTSTRAP' );
    $log.debug( 'Configuring "about" module' );

export default aboutModule;