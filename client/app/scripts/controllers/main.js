'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')  
  .controller('MainCtrl', ['$http', '$scope', '$window', '$mdDialog', function ($http, $scope, $window, $mdDialog) {
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
      var templateUrl = '';
      if (arg === 'mail') {
        templateUrl = '/templates/dialog-email.html';
      } else if (arg === 'call') {
        templateUrl = '/templates/dialog-phone.html';
      }

      $mdDialog.show({
        templateUrl: templateUrl,
        parent: angular.element(document.body),
        controller: 'MainCtrl',
        clickOutsideToClose:true,
      });


    };

    $scope.closeDialog = function() {
      console.log('close dialog');
      $mdDialog.hide();
    };

    $scope.gotoUrl = function(url) {
      
      $window.open(url, '_blank');
    };

    $scope.initiateEmail = function() {
      $window.location.href = 'mailto:sam.vburgh@gmail.com';
    };

    $scope.initiateCall = function() {
      $window.location.href = 'tel:+12032409108';
    };

  }]);
