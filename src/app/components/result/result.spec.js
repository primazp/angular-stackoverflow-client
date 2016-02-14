import ResultModule from './result'
import ResultController from './result.controller';
import ResultComponent from './result.component';
import ResultTemplate from './result.jade';

describe('Result', () => {
  let controller;
  let fakeState = { go() {} };
  let fakeApiSearch = { };

  beforeEach(window.module(ResultModule.name));
  beforeEach(inject(($q) => {
    fakeApiSearch.search = () => ({ $promise: $q.defer().promise });

    controller = new ResultController(
      fakeApiSearch,
      fakeState,
      { query: '' }
    );
  }));

  describe('Controller', () => {
    describe('loadResults()', () => {
      describe('when query string is absent', () => {
        beforeEach(() => {
          spyOn(fakeApiSearch, 'search');
          controller.query = '';
        });

        it('returns', () => {
          controller.loadResults();
          expect(fakeApiSearch.search).not.toHaveBeenCalled();
        });
      });

      describe('when query string is present', () => {
        beforeEach(() => {
          spyOn(fakeApiSearch, 'search').and.callThrough();
          controller.query = 'lorem ipsum';
        });

        it('queries questions', () => {
          controller.loadResults();
          expect(fakeApiSearch.search).toHaveBeenCalled();
        });
      });
    });
  });
});
