import PostController from './post.controller';
// 1455470587

describe('controller', () => {
  let fakeSce = {
    trustAsHtml: jasmine.createSpy('fakeSce.trustAsHtml')
  };
  let controller = new PostController(fakeSce);

  describe('toDate()', () => {
    it('transforms seconds to millis and return date', () => {
      expect(controller.toDate(1455470587).toString()).toEqual(
        'Sun Feb 14 2016 20:23:07 GMT+0300 (MSK)'
      );
    });
  });

  describe('getTrusted()', () => {
    it('calls sce', () => {
      let code = '<script>alert(1);</script>';
      controller.getTrusted(code);
      expect(fakeSce.trustAsHtml).toHaveBeenCalledWith(code);
    });
  });
});
