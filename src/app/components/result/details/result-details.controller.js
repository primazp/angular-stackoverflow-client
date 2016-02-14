import {selectItem} from '../utils/select-item';

class ResultDetailsController {
  constructor(ApiService, $scope) {
    'ngInject';
    this.apiService = ApiService;
    this.$scope = $scope;
    let vm = this;
    this.$scope.$watch('vm.selected.value', this.valueChanged());
  }

  loadDetails() {
    this.isLoaded = false;
    let action = this.selected.type == 'tag' ? 'topByTag' : 'topByAuthor';
    this.apiService[action](this.selected.value).$promise.then((response) => {
      this.questions = response.items;
      this.isLoaded = true;
    });
  }

  valueChanged(newVal, oldVal) {
    return () => { this.loadDetails() };
  }

  queryPopularQuestions(type, object) {
    this.selected = selectItem(type, object);
  }
}

export default ResultDetailsController;
