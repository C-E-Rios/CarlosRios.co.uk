import angular from 'angular';
import uiRouter from 'angular-ui-router';

import portfolioComponent from './portfolio.component';
import portfolioService from './portfolio.service';
import portfolioItemComponent from './portfolioItem/portfolioItem.component';
import portfolioItemService from './portfolioItem/portfolioItem.service';

let portfolioModule = angular.module('portfolio', [
    uiRouter
])
.config(($stateProvider) => {
    'ngInject';
    
    $stateProvider
        .state('portfolio', {
            url: '/portfolio',
            template: '<portfolio></portfolio>'
        });
})
.component('portfolio', portfolioComponent)
.service('portfolioService', portfolioService)

.component('portfolioItem', portfolioItemComponent)
.service('portfolioItemService', portfolioItemService);

export default portfolioModule;