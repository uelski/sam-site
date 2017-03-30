'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')  
  .controller('MainCtrl', ['$http', '$scope', function ($http, $scope) {
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
      console.log($scope.projects);
    });

    $scope.buttonFunction = function(obj) {
      console.log('buttonfunction');
      console.log(obj);
    };

    $scope.githubFunction = function(obj) {
      console.log(obj);
    };

    $scope.deployFunction = function(obj) {
      console.log(obj);
    };

    $scope.openDialog = function(arg) {
      console.log(arg);
    };

    $scope.gotoUrl = function(url) {
      console.log(url);
    };

  }]);
