'use strict';

angular.module('simpleTabsApp')
  .directive('simpleTabs', function () {
    return {
      templateUrl: 'components/simple-tabs/simple-tabs.html',
      restrict: 'E',
      //transclude: true,
      replace: true,
      scope: {
        selected: '@',
        tabs: '='
      },
      controller: function($scope){
        this.setActiveTab = function(tabIndex){
          $scope.activeTab = tabIndex;
        };

        $scope.activeIndex = 0;
      },
      link: function (scope, element, attrs) {
        scope.setActiveTab = function(tabIndex){
          scope.activeIndex = tabIndex;
        }
      }
    };
  });
