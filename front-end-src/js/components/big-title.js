import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'big-title',
  properties: ['title']
})
@View({
  template: `
  <h1>{{ title }}</h1><h5>(I'm the BigTitle component)</h5>
  `
})

export class BigTitle {
  constructor() {}
}