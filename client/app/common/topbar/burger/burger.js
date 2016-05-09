import angular from 'angular';
import burgerComponent from './burger.component';

let burgerModule = angular.module('burger', [])

    .component('burger', burgerComponent);

export default burgerModule;
