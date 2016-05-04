import angular from 'angular';
import Topbar from './topbar/topbar';
import Menu from './menu/menu';
import Burger from './burger/burger';
import User from './user/user';
import IntroAnimation from './introAnimation/introAnimation';

let commonModule = angular.module('app.common', [
    Topbar.name,
    Menu.name,
    Burger.name,  
    User.name,
    IntroAnimation.name
]);

export default commonModule;
