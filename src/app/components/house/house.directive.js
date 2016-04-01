export function HouseDirective() {
  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/house/house.html',
    scope: {
      house: '='
    },
    bindToController: true,
    controller: HouseController,
    controllerAs: 'vm'
  }
  return directive;
}

class HouseController {

}
