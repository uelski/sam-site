'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')  
  .controller('MainCtrl', ['$http', '$scope', '$window', function ($http, $scope, $window) {
    var req = $http.get('/api/data/buttons');
    var scope = this;

    req.then(function (res) {
      scope.buttons = res.data.buttons;
      // console.log(scope.buttons);
      $scope.buttons = res.data.buttons;
      // console.log($scope.buttons);
    });
    req.catch(function (err) {
      console.log(err);
    });

    $http.get('/api/data/projects').then(function(res) {
      $scope.projects = res.data.projects;
      // console.log($scope.projects);
    });

    $scope.buttonFunction = function(obj) {
      var index = obj.index;
      var button = $scope.buttons[index];
      if (button.clickFunction === 'github' || button.clickFunction === 'linkedin') {
        $scope.gotoUrl(button.url);
      } else {
        $scope.openDialog(button.clickFunction);
      }
    };

    $scope.githubFunction = function(obj) {
      var index = obj.index;
      var project = $scope.projects[index];
      $scope.gotoUrl(project.githubUrl);
    };

    $scope.deployFunction = function(obj) {
      var index = obj.index;
      var project = $scope.projects[index];
      $scope.gotoUrl(project.deployUrl);
    };

    $scope.openDialog = function(arg) {
      console.log(arg);
    };

    $scope.gotoUrl = function(url) {
      
      $window.open(url, '_blank');
    };

  }]);
