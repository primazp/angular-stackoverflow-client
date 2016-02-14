import {selectItem} from './utils/select-item';

class ResultController {
  constructor(ApiService, $state, $stateParams) {
    'ngInject';
    this.state = $state;
    this.query = $stateParams.query;
    this.apiService = ApiService;
    this.name = 'result';
    this.pagination = {
      boundaryLinks: true,
      pagesize: 10,
      maxSize: 10,
      page: 1
    }
    this.loadResults();
  }

  loadResults() {
    if (!this.query || !this.query.length) return;

    let { page, pagesize } = this.pagination;
    let options = { page, pagesize };

    this.apiService.search(this.query, options).$promise.then((response) => {
      this.questions = response.items;
      this.pagination.total = response.total;
    });
  }

  queryPopularQuestions(type, object) {
    this.selected = selectItem(type, object);
  }
}

export default ResultController;
