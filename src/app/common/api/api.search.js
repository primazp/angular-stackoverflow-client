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
  filter: '!9YdnSPu8f' // defaults + page, pagesize, total
};

let apiServiceModule = angular.module('api.search', [ ngResource ])
.factory('ApiService', function ($resource) {
  'ngInject';

  const api = $resource('', {}, {
    search: { url: API_URL + 'search/advanced' },
    questions: { url: API_URL + 'questions/:id' },
    questionsByUser: { url: API_URL + 'users/:id/questions' }
  });

  return {
    search(query, options = {}) {
      let params = Object.assign({}, DEFAULT_SEARCH_OPTIONS, options, { q: query, SITE });
      return api.search(params);
    },
    topByTag(tagged) {
      let params = Object.assign({ tagged }, TOP_PARAMS);
      return api.questions(params);
    },
    topByAuthor(id) {
      let params = Object.assign({ id }, TOP_PARAMS);
      return api.questionsByUser(params);
    }
  }
});

export default apiServiceModule;
