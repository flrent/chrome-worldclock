angular.module('popup', [])
  .service('Storage', ['$rootScope', function($rootScope) {

    function _set(timezone) {
    	localStorage['current'] = timezone;
    }

    function _get(cb) {
    	cb(localStorage['current'] || null);
    }
    return {
    	set: _set,
    	get: _get
    };
  }]);
