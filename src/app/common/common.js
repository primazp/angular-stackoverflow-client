import angular from 'angular';
import ApiService from './api/api';

let commonModule = angular.module('app.common', [
  ApiService.name
]);

export default commonModule;
