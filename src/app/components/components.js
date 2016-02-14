import angular from 'angular';
import Search from './search/search';
import Result from './result/result';
import Question from './question/question';

let componentModule = angular.module('app.components', [
  Search.name,
  Result.name,
  Question.name
]);

export default componentModule;
