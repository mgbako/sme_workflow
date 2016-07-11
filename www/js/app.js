// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.clients', {
      url: '/clients',
      views: {
        'menuContent': {
          templateUrl: 'templates/clients.html',
          controller: 'ClientsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/clients/:clientId',
    views: {
      'menuContent': {
        templateUrl: 'templates/client.html',
        controller: 'ClientsCtrl'
      }
    }
  })

  .state('app.notes', {
      url: '/notes',
      views: {
        'menuContent': {
          templateUrl: 'templates/notes.html',
          controller: 'NotesCtrl'
        }
      }
    })

  .state('app.singleNote', {
      url: '/notes/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/singleNote.html',
          controller: 'NotesCtrl'
        }
      }
    })

  .state('app.reports', {
      url: '/reports',
      views: {
        'menuContent': {
          templateUrl: 'templates/reports.html',
          controller: 'ReportsCtrl'
        }
      }
    })

  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

  .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })

  .state('slide', {
      url: '/slide',
      templateUrl: 'templates/slide.html',
      controller: 'SlideCtrl'
    })


  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/slide');
});
