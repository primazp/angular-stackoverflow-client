import SearchModule from './search'
import SearchController from './search.controller';
import SearchComponent from './search.component';
import SearchTemplate from './search.jade';

describe('Search', () => {
  let controller;
  let fakeState = { go() {} }

  beforeEach(window.module(SearchModule.name));
  beforeEach(inject(() => {
    controller = new SearchController(fakeState);
  }));

  describe('Controller', () => {
    describe('getResult()', () => {
      beforeEach(() => {
        spyOn(fakeState, 'go');
      });

      describe('when query string is absent', () => {
        it('returns', () => {
          controller.getResult();
          expect(fakeState.go).not.toHaveBeenCalled();
        });
      });

      describe('when query string is present', () => {
        it('navigates to results', () => {
          let query = 'lorem ipsum';
          controller.query = query;
          controller.getResult();
          expect(fakeState.go).toHaveBeenCalledWith('result', { query });
        });
      });
    });
  });
});
