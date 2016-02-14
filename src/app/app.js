import './app.less';

import angular from 'angular';
import ngFx from 'ng-fx';
import animate from 'angular-animate';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    ngFx,
    animate,
    Common.name,
    Components.name
  ])
  .component('app', AppComponent);
