import angular from 'angular';
import ApiSearch from './api/api.search';

let commonModule = angular.module('app.common', [
  ApiSearch.name
]);

export default commonModule;
