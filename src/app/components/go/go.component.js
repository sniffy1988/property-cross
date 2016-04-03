class goController {
  search(query) {
    this.logger.debug(query);
    this.scope.$emit('recievedData');
  }

  constructor($log, $scope) {
    'ngInject';
    this.logger = $log;
    this.scope = $scope;
  }
}
let GoComponent = {
  templateUrl: 'app/components/go/go.html',
  controller: goController,
  controllerAs: 'go',
  bindings: {
    query: '='
  }
};
export default GoComponent;
