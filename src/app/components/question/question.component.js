import template from './question.jade';
import controller from './question.controller';
import './question.less';

let questionComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
  controllerAs: 'vm'
};

export default questionComponent;
