import angular from 'angular';
import Search from './search/search';

let componentModule = angular.module('app.components', [
  Search.name
]);

export default componentModule;
