import template from './result.jade';
import controller from './result.controller';
import './result.less';

let resultComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
  controllerAs: 'vm'
};

export default resultComponent;
