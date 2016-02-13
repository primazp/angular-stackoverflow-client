import angular from 'angular';
import ApiRequest from './api/api';

let commonModule = angular.module('app.common', [
  ApiRequest.name
]);

export default commonModule;
