import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from 'angular-ui-bootstrap/template/pagination/pagination.html.js';
import paging from 'angular-ui-bootstrap/src/paging/paging';
import pagination from 'angular-ui-bootstrap/src/pagination/pagination';
import resultComponent from './result.component';
import ResultDetails from './details/result-details';

let resultModule = angular.module('result', [
  uiRouter,
  'uib/template/pagination/pagination.html',
  'ui.bootstrap.paging',
  'ui.bootstrap.pagination',
  ResultDetails.name
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('result', {
      url: '/result?query',
      template: '<result></result>'
    });
})

.component('result', resultComponent);

export default resultModule;
