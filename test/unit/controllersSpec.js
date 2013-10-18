'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('appModule'));


  it('should create "phones" model with 3 phones', inject(function($controller) {
		var scope = {}, ctrl = $controller('PhoneListCtrl', {
			$scope : scope
		});
		expect(scope.phones.length).toBe(3);
  }));
});
