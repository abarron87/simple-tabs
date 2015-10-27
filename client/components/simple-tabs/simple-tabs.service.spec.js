'use strict';

describe('Service: SimpleTabsService', function () {

  // load the service's module
  beforeEach(module('simpleTabsApp'));

  // instantiate service
  var SimpleTabsService;
  beforeEach(inject(function (_SimpleTabsService_) {
    SimpleTabsService = _SimpleTabsService_;
  }));

  it('should do something', function () {
    expect(!!SimpleTabsService).toBe(true);
  });

});
