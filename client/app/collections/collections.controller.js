'use strict';

angular.module('simpleTabsApp')
  .controller('CollectionsCtrl', ['$scope', 'SimpleTabsService', function ($scope, SimpleTabsService) {
      $scope.tabs = SimpleTabsService.getTabs();
  }]);
