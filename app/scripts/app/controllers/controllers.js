angular.module('popup')
  .controller('MainController', ['$scope',  '$rootScope', 'Storage', function($scope, $rootScope, Storage) {
      $scope.showAddForm = true;

      $scope.zones = moment.tz.names();

      Storage.get(function(timezone) {
      		if(timezone==null) {
      			$scope.displayTime = moment(new Date().getTime()).format('MMMM Do YYYY');
      			$scope.displayHour = moment(new Date().getTime()).format('hh:mm:ss a');
      		}
      		else {
      			$scope.current = timezone;
      			$scope.displayTime = moment(new Date().getTime()).tz(timezone).format('MMMM Do YYYY');
      			$scope.displayHour = moment(new Date().getTime()).tz(timezone).format('hh:mm a');
      		}
      });

      $scope.changeTimeZone = function() {
      		$scope.displayTime = moment(new Date().getTime()).tz(this.current).format('MMMM Do YYYY');
      		$scope.displayHour = moment(new Date().getTime()).tz(this.current).format('hh:mm a');
      		Storage.set(this.current);
      }


      $scope.contribute = function() {
        chrome.tabs.create({
          url: 'https://github.com/flrent/chrome-extension-angular-base'
        })
      }
  }])
;
