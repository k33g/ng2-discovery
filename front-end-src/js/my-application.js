import {Component, View, bootstrap} from 'angular2/angular2';
import {BigTitle} from 'js/components/big-title';
import {MyContent} from 'js/components/my-content';

import { Inject } from 'angular2/di';
import { InformationsService } from 'js/services/InformationsService';

@Component({
  selector: 'my-application'
  //appInjector: [InformationsService]

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
  constructor(@Inject(InformationsService) informationsService) {
    console.log("Hello!. I'm the constructor of the application.");
    console.log("version", informationsService.getVersion());
    console.log("applicationName", informationsService.getApplicationName())
  }
}

bootstrap(MyApplication, [InformationsService]);
//bootstrap(MyApplication);