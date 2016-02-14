import ResultDetailsModule from './result-details'
import ResultDetailsController from './result-details.controller';
import ResultDetailsComponent from './result-details.component';
import ResultDetailsTemplate from './result-details.jade';

describe('ResultDetails', () => {
  let controller, scope, fakeApiService;

  beforeEach(window.module(ResultDetailsModule.name));
  beforeEach(inject(($q, $rootScope) => {
    let fakeQuery = () => ({ $promise: $q.defer().promise });
    fakeApiService = {
      topByTag: fakeQuery,
      topByAuthor: fakeQuery
    }
    scope = $rootScope.$new();

    controller = new ResultDetailsController(
      fakeApiService,
      scope
    );
  }));

  describe('Controller', () => {
    describe('loadDetails()', () => {
      describe('when type is tag', () => {
        beforeEach(() => {
          spyOn(fakeApiService, 'topByTag').and.callThrough();
          controller.selected= { type: 'tag', value: 'c#' };
        });

        it('returns', () => {
          controller.loadDetails();
          expect(fakeApiService.topByTag).toHaveBeenCalledWith('c#');
        });
      });

      describe('when query string is present', () => {
        beforeEach(() => {
          spyOn(fakeApiService, 'topByAuthor').and.callThrough();
          controller.selected= { type: 'user', value: 123 };
        });

        it('queries questions', () => {
          controller.loadDetails();
          expect(fakeApiService.topByAuthor).toHaveBeenCalledWith(123);
        });
      });
    });

    describe('watch selected value', () => {
      it('calls loadDetails on change', () => {
        spyOn(controller, 'loadDetails');
        controller.selected= { type: 'user', value: 123 };
        scope.$digest();
        expect(controller.loadDetails).toHaveBeenCalled();
      });
    });
  });
});
