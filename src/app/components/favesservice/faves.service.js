export class FavesService {

  constructor($window, $log) {
    'ngInject';
    this.localStorage = $window.localStorage;
    this.logger = $log;
  }

  add(item) {
    let prevData = this.get();
    prevData.push(item);
    this._set(prevData);
  }

  _set(data) {
    let jsonData = JSON.stringify(data);
    this.localStorage.setItem('property-cross', jsonData);
    this.logger.debug(this.get());
  }

  find(item) {
    let data = this.get();
    let fl = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].guid === item.guid) {
        fl = true;
        break;
      }
    }
    return fl;
  }

  remove(guid) {
    this.logger.debug(guid);
    let data = this.get();
    for(let i = 0; i < data.length; i++){
      if(data[i].guid === guid) {
        data.splice(i, 1);
        this._set(data);
      }
    }
  }

  get() {
    if (this.localStorage.getItem('property-cross') === null) {
      let clearobj = [];
      this.localStorage.setItem('property-cross', JSON.stringify(clearobj));
      return clearobj;
    } else {
      return JSON.parse(this.localStorage.getItem('property-cross'));
    }
  }
}
