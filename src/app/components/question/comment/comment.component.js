import template from './comment.jade';
import controller from './comment.controller';
import './comment.less';

let commentComponent = {
  restrict: 'E',
  bindings: {
    content: '='
  },
  template: template(),
  controller,
  controllerAs: 'vm'
};

export default commentComponent;
