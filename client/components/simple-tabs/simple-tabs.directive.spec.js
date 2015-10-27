'use strict';

describe('Directive: simpleTabs', function () {

  // load the directive's module and view
  beforeEach(module('simpleTabsApp'));
  beforeEach(module('components/simple-tabs/simple-tabs.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simple-tabs></simple-tabs>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the simpleTabs directive');
  }));
});
