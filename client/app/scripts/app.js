'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('cyan');
  })
  .directive('fabTemplate', [function() {
    return {
      restrict: 'E',
      scope: {
        rippleColor: '@rippleColor',
        button: '=',
        buttonFunction: '&'
      },
      templateUrl: 'templates/directive-fab-template.html'
    };
  }])
   .directive('projectsTemplate', [function() {
    return {
      restrict: 'E',
      scope: {
        project: '=',
        githubFunction: '&',
        deployFunction: '&'
      },
      templateUrl: 'templates/directive-projects-template.html'
    };
  }]);
