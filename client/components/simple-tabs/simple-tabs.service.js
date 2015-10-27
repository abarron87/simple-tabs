'use strict';

angular.module('simpleTabsApp')
  .service('SimpleTabsService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return {
        getTabs: function(){
          return [
            {
              name: 'Private Collections',
              contents: 'These are under lock and key.'
            },
            {
              name: 'Public Collections',
              contents: 'These are in the public eye.'
            },
            {
              name: 'Shared Collections',
              contents: 'Your colleagues have shared the love.'
            },
            {
              name: 'HTML Test',
              contents: '<span>Alex</span>'
            }
          ]
        }
      }
  });
