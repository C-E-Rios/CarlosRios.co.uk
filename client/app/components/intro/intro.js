import angular from 'angular';
import uiRouter from 'angular-ui-router';

import introComponent from './intro.component';
import introAnimation from './intro.animation';

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
.animation('.intro', introAnimation);

export default introModule;
