export class GeolocationService {
    constructor($q) {
        'ngInject';
        this._$q = $q;
    }
    getCoords() {
        const deferred = this._$q.defer();

        navigator.geolocation.getCurrentPosition(function(data) {
            deferred.resolve({
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            });
        }, deferred.reject);

        return deferred.promise;
    }
}