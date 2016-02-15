class PostController {
  constructor($sce) {
    'ngInject';
    this.trustAsHtml = $sce.trustAsHtml;
  }

  toDate(timeInSeconds) {
    return new Date(timeInSeconds * 1000);
  }
}

export default PostController;
