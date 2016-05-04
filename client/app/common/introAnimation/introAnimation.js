import angular from 'angular';
import introAnimationComponent from './introAnimation.component';

let introAnimationModule = angular.module('introAnimation', [])
    .component('introAnimation', introAnimationComponent);

export default introAnimationModule;
