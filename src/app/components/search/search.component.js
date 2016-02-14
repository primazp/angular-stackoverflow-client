import template from './search.jade';
import controller from './search.controller';
import './search.less';

let searchComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
  controllerAs: 'vm'
};

export default searchComponent;
