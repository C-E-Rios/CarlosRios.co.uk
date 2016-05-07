import angular from 'angular';
import Topbar from './topbar/topbar';
import Menu from './menu/menu';
import Burger from './burger/burger';
import AppValues from './appValues/appValues';

let commonModule = angular.module('app.common', [
    AppValues.name,
    Topbar.name,
    Menu.name,
    Burger.name
]);

export default commonModule;
