import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Common from './common/common';
import Components from './components/components';

import AppComponent from './app.component';

import { LogDecorator, ExternalLogger } from '../../vendor/LogDecorator';
import TweenLite from '../../vendor/TweenLite.js'
import TimelineLite from '../../vendor/TimelineLite.js'

angular
    .element( document )
    .ready(() => {

        let appName = 'app';
        let $log = new ExternalLogger();

        $log = $log.getInstance( "BOOTSTRAP" );
        $log.debug( "Initializing '{0}'", [ appName ] );

        let body = document.getElementsByTagName("body")[0];
        let app  = angular.module( appName, [ 
                    uiRouter,
                    
                    Common.name,
                    Components.name 
                ])
                .config(['$provide', LogDecorator])
                .config(($locationProvider) => {
                    "ngInject";
                    $locationProvider.html5Mode(true).hashPrefix('!');
                })
                .component('app', AppComponent);

        angular.bootstrap( body, [ app.name ], { strictDi: true })

    });

