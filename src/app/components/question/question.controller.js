class QuestionController {
  constructor(ApiService, $state, $stateParams, $sce) {
    'ngInject';

    this.apiService = ApiService;
    this.$state = $state;
    this.questionId = $stateParams.id;
    this.$sce = $sce;
    this.pagination = {
      boundaryLinks: true,
      pagesize: 30,
      maxSize: 10,
      page: 1
    };
    this.loadQuestion();
  }

  loadQuestion() {
    if (!this.questionId) {
      this.$state.go('search');
      return;
    }

    this.apiService.question(this.questionId).$promise.then((response) => {
      this.question = response.items[0];
    });

    let { page, pagesize } = this.pagination;
    let options = { page, pagesize };

    this.apiService.questionAnswers(this.questionId, options)
    .$promise.then((response) => {
      this.answers = response.items;
      this.pagination.total = response.total;
    });
  }
}

export default QuestionController;
