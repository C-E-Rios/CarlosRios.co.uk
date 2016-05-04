import angular from 'angular';
import topbarComponent from './topbar.component';

let topbarModule = angular.module('topbar', [])

    .component('topbar', topbarComponent);

export default topbarModule;
