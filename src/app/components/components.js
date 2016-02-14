import angular from 'angular';
import Search from './search/search';
import Result from './result/result';

let componentModule = angular.module('app.components', [
  Search.name,
  Result.name
]);

export default componentModule;
