angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html"
          
        }
      }
    })
    .state('tabs.info', {
      url: "/info",
      views: {
        'home-tab': {
          templateUrl: "info.html"
        }
      }
    })
    .state('tabs.jelovnik', {
      url: "/jelovnik",
      views: {
        'home-tab': {
          templateUrl: "jelovnik.html"
        }
      }
    })
    .state('tabs.review', {
      url: "/review",
      views: {
        'home-tab': {
          templateUrl: "review.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html"
        }
      }
    })
    .state('tabs.share', {
      url: "/share",
      views: {
        'home-tab': {
          templateUrl: "share.html"
        }
      }
    })
    .state('tabs.review-happy', {
      url: "/review-happy",
      views: {
        'home-tab': {
          templateUrl: "review-happy.html"
        }
      }
    })
    .state('tabs.review-sad', {
      url: "/review-sad",
      views: {
        'home-tab': {
          templateUrl: "review-sad.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "contact.html"
        }
      }
    });


  $urlRouterProvider.otherwise("/tab/jelovnik");

})

