import angular from 'angular';
import template from './preloader.jade';
import './preloader.less';

let preloader = {
  restrict: 'E',
  bindings: { },
  template: template()
};

let preloaderModule = angular.module('preloader', [])
.component('preloader', preloader);

export default preloaderModule;
