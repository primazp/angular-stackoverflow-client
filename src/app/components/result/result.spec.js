import ResultModule from './result'
import ResultController from './result.controller';
import ResultComponent from './result.component';
import ResultTemplate from './result.jade';

describe('Result', () => {
  let controller;
  let fakeState = { go() {} };
  let fakeApiService = { };
  let fakeSce = { trustAsHtml() { } };

  beforeEach(window.module(ResultModule.name));
  beforeEach(inject(($q) => {
    fakeApiService.search = () => ({ $promise: $q.defer().promise });

    controller = new ResultController(
      fakeApiService,
      fakeState,
      { query: '' },
      fakeSce
    );
  }));

  describe('Controller', () => {
    describe('loadResults()', () => {
      describe('when query string is absent', () => {
        beforeEach(() => {
          spyOn(fakeApiService, 'search');
          controller.query = '';
        });

        it('returns', () => {
          controller.loadResults();
          expect(fakeApiService.search).not.toHaveBeenCalled();
        });
      });

      describe('when query string is present', () => {
        beforeEach(() => {
          spyOn(fakeApiService, 'search').and.callThrough();
          controller.query = 'lorem ipsum';
        });

        it('queries questions', () => {
          controller.loadResults();
          expect(fakeApiService.search).toHaveBeenCalled();
        });
      });
    });
  });
});
