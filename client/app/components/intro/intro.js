import angular from 'angular';
import uiRouter from 'angular-ui-router';

import introComponent from './intro.component';
import introService from './intro.service';

let introModule = angular.module('intro', [
    uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('welcome', {
            url: '/',
            template: '<intro></intro>'
        });
})
.component('intro', introComponent)
.service('introService', introService);

export default introModule;
