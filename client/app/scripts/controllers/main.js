'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')  
  .controller('MainCtrl', ['$http', '$scope', '$rootScope', '$window', '$mdDialog', '$mdSidenav', function ($http, $scope, $rootScope, $window, $mdDialog, $mdSidenav) {
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

    $scope.openSideNav = function() {
      $mdSidenav('left').toggle();
    };

    $scope.user = {
      'name': '',
      'email': '',
      'subject': '',
      'message': ''
    };


    $rootScope.$on('messageSuccess', function(e, args) {
      if (args.event === 'success') {
        $scope.user = {
          'name': '',
          'email': '',
          'subject': '',
          'message': ''
        };
      }
    });


    // $scope.showValidation = false;

    // $scope.showSubmit = 'hi';
    
    $scope.submitForm = function() {
      $scope.validateMessage = '';
      if ($scope.user.name === '' ) {
        // console.log($scope.user);
        $scope.validateMessage = 'Name Required';
        $scope.showValidation = true;
        $scope.showSubmit = false;
        $scope.submitDialog($scope.showSubmit, $scope.showValidation, $scope.validateMessage);
      } else if ($scope.user.email === '') {
        $scope.validateMessage = 'Email Required';
        $scope.showValidation = true;
        $scope.showSubmit = false;
        $scope.submitDialog($scope.showSubmit, $scope.showValidation, $scope.validateMessage);
      } else if ($scope.user.subject === '') {
        $scope.validateMessage = 'Subject Required';
        $scope.showValidation = true;
        $scope.showSubmit = false;
        $scope.submitDialog($scope.showSubmit, $scope.showValidation, $scope.validateMessage);
      } else if ($scope.user.message === '') {
        $scope.validateMessage = 'Message Required';
        $scope.showValidation = true;
        $scope.showSubmit = false;
        $scope.submitDialog($scope.showSubmit, $scope.showValidation, $scope.validateMessage);
      } else {
        $scope.showValidation = false;
        $scope.showSubmit = true;
        $scope.submitDialog($scope.showSubmit, $scope.showValidation, $scope.validateMessage, $scope.user);

      }
      
    };

    $scope.submitDialog = function(submit, validate, message, user) {
      
      $mdDialog.show({
        templateUrl: '/templates/dialog-submit.html',
        parent: angular.element(document.body),
        locals: {
          validateMessage: message,
          showValidation: validate,
          showSubmit: submit,
          user: user
        },
        controller: ['$scope', '$rootScope', 'validateMessage', 'showValidation', 'showSubmit', 'user', function($scope, $rootScope, validateMessage, showValidation, showSubmit) {
          $scope.validateMessage = validateMessage;
          $scope.showValidation = showValidation;
          $scope.showSubmit = showSubmit;
          $scope.user = user;

          if ($scope.showSubmit === true) {
            var req = $http.post('/api/data/userMessage', $scope.user);
            req.then( function (res) {
              // console.log(res.status);
              if (res.status === 200) {
                // console.log('success');
                $scope.showSuccess = true;
                $scope.showError = false;
                $scope.showSubmit = false;
                $scope.showValidation = false;
                $rootScope.$emit('messageSuccess', {event:'success'} );
              } else {
                $scope.showError = true;
                $scope.showSuccess = false;
                $scope.showSubmit = false;
                $scope.showValidation = false;
              }
            });
          }

          // $scope.postIt = function() {
            
          // };

          $scope.closeDialog = function() {
            
            $mdDialog.hide();
          };
        }]
      });

    };

  }]);
