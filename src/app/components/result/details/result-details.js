import angular from 'angular';
import resultDetailsComponent from './result-details.component';

let resultDetailsModule = angular.module('result-details', [])
.component('resultDetails', resultDetailsComponent);

export default resultDetailsModule;
