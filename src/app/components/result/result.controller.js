class ResultController {
  constructor(ApiSearch, $state, $stateParams) {
    'ngInject';
    this.state = $state;
    this.query = $stateParams.query;
    this.apiSearch = ApiSearch;
    this.name = 'search';
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

    this.apiSearch.search(this.query, options).$promise.then((response) => {
      console.debug(1);
      this.questions = response.items;
      this.pagination.total = response.total;
    }, (err) => {
      console.debug(2);
    });
  }
}

export default ResultController;
