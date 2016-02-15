import {selectItem} from '../utils/select-item';

class ResultDetailsController {
  constructor(ApiService, $scope, $sce) {
    'ngInject';
    this.apiService = ApiService;
    this.$scope = $scope;
    this.trustAsHtml = $sce.trustAsHtml;
    let vm = this;
    this.$scope.$watch('vm.selected.value', this.loadDetails.bind(this));
  }

  loadDetails() {
    this.isLoaded = false;
    let action = this.selected.type == 'tag' ? 'topByTag' : 'topByAuthor';
    this.apiService[action](this.selected.value).$promise.then((response) => {
      this.questions = response.items;
      this.isLoaded = true;
    });
  }

  queryPopularQuestions(type, object) {
    this.selected = selectItem(type, object);
  }
}

export default ResultDetailsController;
