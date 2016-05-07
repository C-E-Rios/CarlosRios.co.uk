import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { LogDecorator, ExternalLogger } from '../../vendor/LogDecorator';

import TweenLite from "gsap";
import TimelineLite from "gsap";
import CSSPlugin from "gsap/src/uncompressed/plugins/CSSPlugin"
import DrawSVGPlugin from "gsap/src/uncompressed/plugins/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/src/uncompressed/plugins/MorphSVGPlugin";

import Common from './common/common';
import Components from './components/components';

import AppComponent from './app.component';

angular
    .element( document )
    .ready(() => {

        let appName = 'app';
        let $log = new ExternalLogger();

        $log = $log.getInstance( 'BOOTSTRAP' );
        $log.debug( "Initializing '{0}'", [ appName ] );

        let body = document.getElementsByTagName('body')[0];
        let app  = angular.module( appName, [ 
                    uiRouter,
                    ngAnimate,
                    
                    Common.name,
                    Components.name 
                ])
                .config(['$provide', LogDecorator])
                .config(($locationProvider) => {
                    'ngInject';
                    $locationProvider.html5Mode(true).hashPrefix('!');
                })
                .component('app', AppComponent);

        angular.bootstrap( body, [ app.name ], { strictDi: true })

    });

