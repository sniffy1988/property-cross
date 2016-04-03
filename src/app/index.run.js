export function runBlock ($log, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.listings = [];

  const listingsHere = $rootScope.$on('listings_here', function(event, data) {
    $log.debug(event);
    $rootScope.listings = data.listings;
  });
}
