import angular from 'angular';
import Topbar from './topbar/topbar';
import Menu from './menu/menu';
import Burger from './burger/burger';
import AppValues from './appValues/appValues';
import IntroAnimation from './introAnimation/introAnimation';

let commonModule = angular.module('app.common', [
    AppValues.name,
    Topbar.name,
    Menu.name,
    Burger.name,  
    IntroAnimation.name
]);

export default commonModule;
