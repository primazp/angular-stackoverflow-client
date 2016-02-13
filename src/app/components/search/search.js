import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchComponent from './search.component';

let searchModule = angular.module('search', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('search', {
      url: '/',
      template: '<search></search>'
    });
})

.component('search', searchComponent);

export default searchModule;
