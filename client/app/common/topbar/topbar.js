import angular from 'angular';
import Menu from './menu/menu';
import Burger from './burger/burger';
import topbarComponent from './topbar.component';

let topbarModule = angular.module('topbar', [
        Burger.name,
        Menu.name
])

    .component('topbar', topbarComponent);

export default topbarModule;
