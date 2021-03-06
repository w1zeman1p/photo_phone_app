// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
/*global angular, window, cordova */
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .run(function ($ionicPlatform, User) {
    if (User.loggedIn()) {
      console.log("User is logged in");
    } else {
      console.log("User is NOT logged in.");
    }
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      // Each tab has its own nav history stack:
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })
      .state('tab.shoot', {
        url: '/shoot',
        views: {
          'tab-shoot': {
            templateUrl: 'templates/tab-shoot.html',
            controller: 'ShootCtrl'
          }
        }
      })
      .state('tab.photo', {
        url: '/photo/{id}',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-photo.html',
            controller: 'PhotoCtrl'
          }
        }
      }).state('tab.description', {
        url: '/description/{id}',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-description.html',
            controller: 'DescriptionCtrl'
          }
        }
      })
      .state('tab.describe', {
        url: '/describe',
        views: {
          'tab-describe': {
            templateUrl: 'templates/tab-describe.html',
            controller: 'DescribeCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('/tab/dash');
  })
  .config(['$httpProvider',
    function ($httpProvider) {
      $httpProvider.interceptors.push('authHttpResponseInterceptor');
    }
  ]);
