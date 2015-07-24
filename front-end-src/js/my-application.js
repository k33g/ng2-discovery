import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-application'
})
@View({
  template: `
  <h5>( I'm the main component: MyApplication)</h5>
  `
})

export class MyApplication {
  constructor() {
    console.log("Hello!. I'm the constructor of the application.")
  }
}

bootstrap(MyApplication);
