'use strict';

angular.module('simpleTabsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/collections/collections.html',
        controller: 'CollectionsCtrl',
          controllerAs: 'collections'
      });
  });
