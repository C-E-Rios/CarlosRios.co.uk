import angular from 'angular';
import Topbar from './topbar/topbar';
import Menu from './menu/menu';
import Burger from './burger/burger';
import User from './user/user';

let commonModule = angular.module('app.common', [
    Topbar.name,
    Menu.name,
    Burger.name,  
    User.name
]);

export default commonModule;
