class SearchController {
  constructor($state) {
    'ngInject';
    this.state = $state;
    this.name = 'search';
    this.query = ''
  }

  getResult() {
    if (this.query.length) {
      this.state.go('result', { query: this.query });
    }
  }
}

export default SearchController;
