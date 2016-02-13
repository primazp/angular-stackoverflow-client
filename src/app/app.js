import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    Common.name,
    Components.name
  ])
  .component('app', AppComponent);
