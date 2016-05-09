import angular from 'angular';
import menuComponent from './menu.component';
import menuService from './menu.service';

let menuModule = angular.module('menu', [])
    .component('menu', menuComponent)
    .service('menuService', menuService);

export default menuModule;
