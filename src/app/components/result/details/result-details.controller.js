import {selectItem} from '../utils/select-item';

class ResultDetailsController {
  constructor(ApiSearch, $scope) {
    'ngInject';
    this.apiSearch = ApiSearch;
    this.$scope = $scope;
    let vm = this;
    this.$scope.$watch('vm.selected.value', this.valueChanged());
  }

  loadDetails() {
    let action = this.selected.type == 'tag' ? 'topByTag' : 'topByAuthor';
    this.apiSearch[action](this.selected.value).$promise.then((response) => {
      this.questions = response.items;
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
