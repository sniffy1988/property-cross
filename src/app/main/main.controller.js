export class MainController {
  constructor ($scope, $timeout, webDevTec, GeolocationService, toastr, NestoriaAPI, $log, $state) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1458749947546;
    this.toastr = toastr;
    this._geo = GeolocationService;
    this._$log = $log;

    this.locations = [];
    this.activate($timeout, webDevTec);

    this.errorMessage = '';

    this.search = function(text) {
      this.clear();

      $log.debug('search ' + text);
      NestoriaAPI.get(text)
        .then( response => {
          $log.debug(response);
          // leeds, london
          if(response.type === 'listings') {

            $scope.$emit('listings_here', {
              listings: response.data
            });

            $state.go('houses');
          } else {
          // lee
            this.locations = response.data;
          }
        }).catch((res) => {
            switch(res.response.application_response_code) {
              case '201':
                this.errorMessage = 'Location not matched';
                    break;
              default:
                this.errorMessage = 'Unable to detect current location. Please ensure location is turned on in your phone settings and try again';
            }
        });
    };
  }
  searchLocation() {
    this._geo.getCoords()
      .then(res => {
          this._$log.debug(res);
          // NestoriaAPI.getByLocation
        });
  }
  clear() {
    this.errorMessage = '';
    this.locations = [];
  }
  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
