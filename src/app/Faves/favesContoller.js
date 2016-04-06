export class FavesController{
  constructor(FavesService){
    'ngInject';
    this.data = FavesService.get();
  }
}
