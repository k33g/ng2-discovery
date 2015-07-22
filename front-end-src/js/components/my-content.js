import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'my-content',
  properties: ['urlcontent']
})
@View({
  template: `
  <p>{{ content }}<h5>(I'm a MyContent component)</h5></p>
  `
})

export class MyContent {
  getContent (url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
  /* https://angular.io/docs/js/latest/api/annotations/onInit-const.html */
  onInit () {
    this.getContent(this.urlcontent).then((data) => {
      this.content = data.content;
      console.log(data);
    });

  }

  constructor() {
    this.content = "Content here. Please wait ...";
  }
}