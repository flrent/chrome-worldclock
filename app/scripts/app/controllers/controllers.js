angular.module('popup')
  .controller('MainController', ['$scope', function($scope) {
      $scope.zones = moment.tz.names();

      $scope.contribute = function() {
        chrome.tabs.create({
          url: 'https://github.com/flrent/chrome-extension-angular-base'
        })
      }
  }])
;
