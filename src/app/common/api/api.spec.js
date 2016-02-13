import apiRequestModule from './api';

describe('ApiRequest', () => {

  let $httpBackend, api;

  beforeEach(window.module(apiRequestModule.name));
  beforeEach(inject((_$httpBackend_, ApiRequest) => {
    $httpBackend = _$httpBackend_;
    api = ApiRequest;
  }));

  describe('Factory', () => {
    it('requests advanced search', () => {
      let query = 'searchadvanced?SITE=stackoverflow&notagged=true' +
        '&order=desc&q=lorem%2Bipsum&sort=activity';
      $httpBackend.expectGET(api.API_URL + query).respond(200)
      api.search('lorem+ipsum');
      $httpBackend.flush();
    });
  });
});
