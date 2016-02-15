import {selectItem} from './utils/select-item';

class ResultController {
  constructor(ApiService, $state, $stateParams, $sce) {
    'ngInject';
    this.state = $state;
    this.query = $stateParams.query;
    this.apiService = ApiService;
    this.name = 'result';
    this.settings = {
      boundaryLinks: true,
      pagesize: 30,
      maxSize: 10,
      page: 1,
      sort: 'activity',
      order: 'desc'
    };
    this.sorts = [
      'activity',
      'votes',
      'creation',
      'relevance'
    ];
    this.orders = [
      'desc',
      'asc'
    ];
    this.trustAsHtml = $sce.trustAsHtml;
    this.loadResults();
  }

  loadResults() {
    if (!this.query || !this.query.length) return;

    let { page, pagesize, sort, order } = this.settings;
    let options = { page, pagesize, sort, order };

    this.pageLoaded = false;

    this.apiService.search(this.query, options).$promise.then((response) => {
      this.questions = response.items;
      this.settings.total = response.total;
      this.pageLoaded = true;
    });
  }

  updateSettings() {
    this.settings.page = 1;
    this.loadResults();
  }

  queryPopularQuestions(type, object) {
    this.selected = selectItem(type, object);
  }
}

export default ResultController;
