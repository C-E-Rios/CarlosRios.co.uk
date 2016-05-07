import angular from 'angular';

import Intro from './intro/intro';
import Home from './home/home';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Intro.name,
  Home.name,
  About.name
]);

export default componentModule;
