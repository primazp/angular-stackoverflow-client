import SearchModule from './search'
import SearchController from './search.controller';
import SearchComponent from './search.component';
import SearchTemplate from './search.html';

describe('Search', () => {
  let $rootScope, $state, controller;

  beforeEach(window.module(SearchModule.name));
  beforeEach(inject((_$rootScope_, _$state_) => {
    $rootScope = _$rootScope_;
    $state = _$state_;
    controller = new SearchController($state);
  }));

  describe('Controller', () => {
    describe('getResult()', () => {
      beforeEach(() => {
        spyOn($state, 'go');
      });

      describe('when query string is absent', () => {
        it('returns', () => {
          controller.getResult();
          expect($state.go).not.toHaveBeenCalled();
        });
      });

      describe('when query string is present', () => {
        it('returns', () => {
          let query = 'lorem ipsum';
          controller.query = query;
          controller.getResult();
          expect($state.go).toHaveBeenCalledWith('result', { query });
        });
      });
    });
  });
});
