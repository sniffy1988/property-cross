export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('property', {
      url: '/property',
      templateUrl : 'app/property/property.html',
      controller: "PropertyController",
      controllerAs: 'property'
    });

  $urlRouterProvider.otherwise('/');
}
