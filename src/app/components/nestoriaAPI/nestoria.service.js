export class NestoriaAPI {
  constructor($http, $q) {
    'ngInject';
    const baseUrl = ['http://api.nestoria.co.uk/api?',
      'country=uk&pretty=1&action=search_listings',
      '&encoding=json&listing_type=buy&page=1&',
      'callback=JSON_CALLBACK&place_name='
    ].join('');
    const locUrl = ['http://api.nestoria.co.uk/api?',
      'country=uk&pretty=1&action=search_listings',
      '&encoding=json&listing_type=buy&page=1&',
      'callback=JSON_CALLBACK&centre_point='
    ].join('');
    const fakeLoc = '51.684183,-3.431481';


    const validCodes = ['100', '101', '110'],
      ambiguousCodes = ['200', '202'];

    this.get = function (text) {
      var deferred = $q.defer();

      $http.jsonp(baseUrl + text)
        .then(function (response) {
          let code = response.data.response.application_response_code;
          if (validCodes.indexOf(code) > -1) {
            deferred.resolve({
              type: 'listings',
              data: response.data.response.listings
            });
          } else if (ambiguousCodes.indexOf(code) > -1) {
            deferred.resolve({
              type: 'locations',
              data: response.data.response.locations
            });
          } else {
            deferred.reject(response.data);
          }
        }, deferred.reject);

      return deferred.promise;
    };
    this.searchByLocation = function (lat, lng) {
      var defer = $q.defer();
      $http.jsonp(locUrl + lat + ',' + lng)
        .then(function (response) {
          let code = response.data.response.application_response_code;
          if (validCodes.indexOf(code) > -1) {
            deferred.resolve({
              type: 'listings',
              data: response.data.response.listings
            });
          } else if (ambiguousCodes.indexOf(code) > -1) {
            deferred.resolve({
              type: 'locations',
              data: response.data.response.locations
            });
          } else {
            deferred.reject(response.data);
          }
        }, deferred.reject);

      return deferred.promise;
    }
  }

}
