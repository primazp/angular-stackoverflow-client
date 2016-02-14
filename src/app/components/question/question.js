import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from 'angular-ui-bootstrap/template/pagination/pagination.html.js';
import paging from 'angular-ui-bootstrap/src/paging/paging';
import pagination from 'angular-ui-bootstrap/src/pagination/pagination';
import questionComponent from './question.component';
import PostModule from './post/post';
import CommentModule from './post/post';
import Preloader from '../preloader/preloader';

let questionModule = angular.module('question', [
  uiRouter,
  'uib/template/pagination/pagination.html',
  'ui.bootstrap.paging',
  'ui.bootstrap.pagination',
  PostModule.name,
  CommentModule.name,
  Preloader.name
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('question', {
      url: '/questions/:id',
      template: '<question></question>'
    });
})

.component('question', questionComponent);

export default questionModule;
