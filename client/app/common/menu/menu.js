import angular from 'angular';
import menuComponent from './menu.component';

let menuModule = angular.module('menu', [])
    .component('menu', menuComponent);

export default menuModule;
