'use strict';

describe('Controller: HomeworkCtrl', function () {

  // load the controller's module
  beforeEach(module('classAssignmentsV2App'));

  var HomeworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeworkCtrl = $controller('HomeworkCtrl', {
      $scope: scope
    });
  }));


});
