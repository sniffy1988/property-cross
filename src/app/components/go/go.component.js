class goController {
  search(query) {
    this.logger.debug(query);
  }

  constructor($log) {
    'ngInject';
    this.logger = $log;
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
