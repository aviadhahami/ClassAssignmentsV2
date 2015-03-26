'use strict';

describe('Controller: AddtaskCtrl', function () {

  // load the controller's module
  beforeEach(module('classAssignmentsV2App'));

  var AddtaskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddtaskCtrl = $controller('AddtaskCtrl', {
      $scope: scope
    });
  }));


});
