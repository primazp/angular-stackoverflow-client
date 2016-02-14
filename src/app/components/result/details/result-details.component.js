import template from './result-details.jade';
import controller from './result-details.controller';
import './result-details.less';

let resultDetailsComponent = {
  restrict: 'E',
  bindings: {
    selected: '='
  },
  template: template(),
  controller,
  controllerAs: 'vm'
};

export default resultDetailsComponent;
