export function BtnFave() {
  let directive = {
    restrict: 'E',
    scope: {
      item: "="
    },
    controller: BtnFaveController,
    controllerAs: 'fave',
    bindToController: true,
    template : `
    <md-button class="md-fab" aria-label="Eat cake" ng-click="fave.work(fave.item)">
    {{fave.inFave ? 'Rem' : 'Add' }}
    </md-button>
    `
  }
  return directive;
}
class BtnFaveController {
  constructor($log, FavesService){
    'ngInject';
    this.data = FavesService.get();
    this.storage = FavesService;
    this.logger = $log;
    this.inFave = this.isFave();
  }
  isFave(){
    return this.storage.find(this.item);
  }
  work(item) {
    if(this.inFave) {
      this.storage.remove(item.guid);
    } else {
      this.storage.add(item);

    }
    this.inFave = !this.inFave;
  }
}
