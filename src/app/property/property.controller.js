export class PropertyController {
  constructor($scope, $log){
    'ngInject';
    $scope.$on('recievedData', function (event, data) {
      $log.debug(event);
    });
  }
}
