import template from './post.jade';
import controller from './post.controller';
import './post.less';

let postComponent = {
  restrict: 'E',
  bindings: {
    post: '=',
    owner: '='
  },
  template: template(),
  controller,
  controllerAs: 'vm'
};

export default postComponent;
