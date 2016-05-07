import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeAnimation from './home.animation';

let homeModule = angular.module('home', [
    uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>'
        });
})
.component('home', homeComponent)
.animation('.home', homeAnimation);

export default homeModule;
