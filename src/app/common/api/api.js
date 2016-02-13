import angular from 'angular';
import ngResource from 'angular-resource';

let apiRequestModule = angular.module('api.request', [ ngResource ])
.factory('ApiRequest', function ($resource) {
  'ngInject';

  const API_URL = 'http://localhost:3000/'; // http://api.stackexchange.com/2.2/

  const api = $resource(API_URL + ':action', {}, {
    questions: { method: 'GET', params: { action: 'searchadvanced' }},
    questionsByTag: { path: '', method: 'GET' },
    questionsByAuthor: { path: '', method: 'GET' }
  });

  const SITE = 'stackoverflow';

  return {
    search(query, order = 'desc', sort = 'activity') {
      return api.questions({
        q: query,
        notagged: true,
        order,
        sort,
        SITE
      })
    },
    API_URL
  }
});

export default apiRequestModule;
