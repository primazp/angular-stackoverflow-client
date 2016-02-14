import ResultDetailsModule from './result-details'
import ResultDetailsController from './result-details.controller';
import ResultDetailsComponent from './result-details.component';
import ResultDetailsTemplate from './result-details.jade';

describe('Result', () => {
  let controller, scope, fakeApiSearch;

  beforeEach(window.module(ResultDetailsModule.name));
  beforeEach(inject(($q, $rootScope) => {
    let fakeQuery = () => ({ $promise: $q.defer().promise });
    fakeApiSearch = {
      topByTag: fakeQuery,
      topByAuthor: fakeQuery
    }
    scope = $rootScope.$new();

    controller = new ResultDetailsController(
      fakeApiSearch,
      scope
    );
  }));

  describe('Controller', () => {
    describe('loadDetails()', () => {
      describe('when type is tag', () => {
        beforeEach(() => {
          spyOn(fakeApiSearch, 'topByTag').and.callThrough();
          controller.selected= { type: 'tag', value: 'c#' };
        });

        it('returns', () => {
          controller.loadDetails();
          expect(fakeApiSearch.topByTag).toHaveBeenCalledWith('c#');
        });
      });

      describe('when query string is present', () => {
        beforeEach(() => {
          spyOn(fakeApiSearch, 'topByAuthor').and.callThrough();
          controller.selected= { type: 'user', value: 123 };
        });

        it('queries questions', () => {
          controller.loadDetails();
          expect(fakeApiSearch.topByAuthor).toHaveBeenCalledWith(123);
        });
      });
    });
  });
});
