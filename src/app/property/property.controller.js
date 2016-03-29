export class PropertyController {
  constructor($scope) {
    'ngInject';
    let vm = this;
    vm.search = '';
    $scope.$on('recievedData', _initModel);
    function _initModel() {
      vm.search = '';
    }
  }



}
