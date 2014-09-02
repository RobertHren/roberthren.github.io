angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
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

function handleSocialShare()
{
    $('#select-choice-share option:selected').each(function()
    {
        text = "Flash vs HTML5 Trendanalyse";
        url ="http://www.sebastianviereck.de/flash-html5-trendanalyse/#.ULTEkYb9n2A";

        shareService = $(this).val()
        switch (shareService) {
            case "facebook":
                shareFacebookLike(url);
                break;
            case "twitter":
                shareTwitter(url, text);
                break;
            case "email":
                shareEmail(url, text);
                break;
            default:

        }
    });
}


