import angular from 'angular';
import uiRouter from 'angular-ui-router';
import burgerComponent from './burger.component';

let burgerModule = angular.module('burger', [
    uiRouter
])

.component('burger', burgerComponent);

export default burgerModule;
