import angular from 'angular';
import AppValues from './appValues.factory';

let appValuesModule = angular.module('appValues', [])

.factory('AppValues', AppValues);

export default appValuesModule;
