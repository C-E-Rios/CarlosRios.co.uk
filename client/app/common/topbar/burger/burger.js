import angular from 'angular';
import burgerComponent from './burger.component';
import burgerService from './burger.service';

let burgerModule = angular.module('burger', [])

    .component('burger', burgerComponent)
    .service('burgerService', burgerService);

export default burgerModule;
