class PostController {
  constructor($sce) {
    'ngInject';
    this.$sce = $sce;
  }

  toDate(timeInSeconds) {
    return new Date(timeInSeconds * 1000);
  }

  getTrusted(content) {
    return this.$sce.trustAsHtml(content);
  }
}

export default PostController;
