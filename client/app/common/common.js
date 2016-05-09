import angular from 'angular';
import Topbar from './topbar/topbar';

let commonModule = angular.module('app.common', [
    Topbar.name
]);

export default commonModule;
