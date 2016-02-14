import angular from 'angular';
import ngResource from 'angular-resource';

const API_URL = 'http://localhost:3000/'; // http://api.stackexchange.com/2.2/
const SITE = 'stackoverflow';
const TOP_PARAMS = {
  page: 1,
  pagesize: 10,
  order: 'desc',
  sort: 'votes',
  SITE
};
const DEFAULT_SEARCH_OPTIONS = {
  order: 'desc',
  sort: 'activity',
  notagged: true,
  page: 1,
  pagesize: 10,
  filter: '!9YdnSPu8f', // defaults + page, pagesize, total,
  SITE
};
const DEFAULT_ANSWERS_OPTIONS = {
  order: 'desc',
  sort: 'votes',
  /**
  * defaults + comments, comments body, answers body,
  * pagesize, page, total
  */
  filter: '!3yXvhCikrFf()L8OD',
  pagesize: 10,
  page: 1,
  SITE
};

let apiServiceModule = angular.module('api.search', [ ngResource ])
.factory('ApiService', function ($resource) {
  'ngInject';

  const api = $resource('', {}, {
    search: { url: API_URL + 'search/advanced' },
    questions: { url: API_URL + 'questions/:id' },
    questionAnswers: { url: API_URL + 'questions/:id/answers' },
    questionsByUser: { url: API_URL + 'users/:id/questions' }
  });

  return {
    search(query, options = {}) {
      let params = Object.assign(
        {}, DEFAULT_SEARCH_OPTIONS, options, { q: query }
      );
      return api.search(params);
    },
    topByTag(tagged) {
      let params = Object.assign({ tagged }, TOP_PARAMS);
      return api.questions(params);
    },
    topByAuthor(id) {
      let params = Object.assign({ id }, TOP_PARAMS);
      return api.questionsByUser(params);
    },
    question(id) {
      let params = { filter: '!9YdnSIN18', id, SITE };
      return api.questions(params);
    },
    questionAnswers(id, options) {
      let params = Object.assign({}, DEFAULT_ANSWERS_OPTIONS, options, { id });
      return api.questionAnswers(params);
    }
  }
});

export default apiServiceModule;
