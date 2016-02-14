import angular from 'angular';
import resultDetailsComponent from './result-details.component';
import Preloader from '../../preloader/preloader';

let resultDetailsModule = angular.module('result-details', [
  Preloader.name
])
.component('resultDetails', resultDetailsComponent);

export default resultDetailsModule;
