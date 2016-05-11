import angular from 'angular';

import Intro from './intro/intro';
import Home from './home/home';
import About from './about/about';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
    Intro.name,
    Home.name,
    About.name,
    Portfolio.name,
    Contact.name
]);

export default componentModule;
