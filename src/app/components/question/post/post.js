import angular from 'angular';
import postComponent from './post.component';
import CommentModule from '../comment/comment';

let postModule = angular.module('post', [
  CommentModule.name
])
.component('post', postComponent);

export default postModule;
