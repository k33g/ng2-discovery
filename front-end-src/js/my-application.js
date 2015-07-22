import {Component, View, bootstrap} from 'angular2/angular2';
import {BigTitle} from 'js/components/big-title'
import {MyContent} from 'js/components/my-content'

@Component({
  selector: 'my-application'
})
@View({
  template: `
  <h5>(I'm the main component: MyApplication)</h5>
  <big-title title="Angular2 Discovery"></big-title>
  <hr>
  <my-content urlcontent="content001.json"></my-content>
  <my-content urlcontent="content002.json"></my-content>
  `,
  directives: [BigTitle, MyContent]

})

export class MyApplication {
  constructor() {
    console.log("Hello!. I'm the constructor of the application.")
  }
}

bootstrap(MyApplication);