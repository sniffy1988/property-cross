export class MainController {
  constructor ($timeout, webDevTec, toastr, NestoriaAPI, $log, $rootScope, $state) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1458749947546;
    this.toastr = toastr;

    this.locations = [];
    this.activate($timeout, webDevTec);

    this.search = function(text) {
      $log.debug('search ' + text);
      NestoriaAPI.get(text)
        .then( response => {
          $log.debug(response);
          // leeds, london
          if(response.type === 'listings') {
            $rootScope.listings = response.data;
            //$state.go('home')
          } else {
          // lee
            this.locations = response.data;
          }
        }).catch((res) => {
          $log.error(res);
        });
    };
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
