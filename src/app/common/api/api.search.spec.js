import apiSearchModule from './api.search';

describe('ApiSearch', () => {

  let $httpBackend, api;

  const API_URL = 'http://localhost:3000/'; // http://api.stackexchange.com/2.2/

  beforeEach(window.module(apiSearchModule.name));
  beforeEach(inject((_$httpBackend_, ApiSearch) => {
    $httpBackend = _$httpBackend_;
    api = ApiSearch;
  }));

  describe('Factory', () => {
    it('requests advanced search', () => {
      let query = 'search/advanced?SITE=stackoverflow&filter=!9YdnSPu8f' +
        '&notagged=true&order=desc&page=2&pagesize=10&q=lorem%2Bipsum&' +
        'sort=activity';
      $httpBackend.expectGET(API_URL + query).respond(200)
      api.search('lorem+ipsum', { page: 2 });
      $httpBackend.flush();
    });

    it('requests top10 questions by tag', () => {
      let query = 'questions?SITE=stackoverflow&order=desc&page=1' +
        '&pagesize=10&sort=votes&tagged=lorem';
      $httpBackend.expectGET(API_URL + query).respond(200)
      api.topByTag('lorem');
      $httpBackend.flush();
    });

    it('requests top10 questions by user', () => {
      let query = 'users/123/questions?SITE=stackoverflow&order=desc&page=1' +
        '&pagesize=10&sort=votes';
      $httpBackend.expectGET(API_URL + query).respond(200)
      api.topByAuthor(123);
      $httpBackend.flush();
    });
  });
});
