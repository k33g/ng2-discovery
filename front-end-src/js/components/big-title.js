import {Component, View} from 'angular2/angular2';

import { Inject } from 'angular2/di';
import { InformationsService } from 'js/services/InformationsService';

@Component({
  selector: 'big-title',
  properties: ['title'],
  appInjector: [InformationsService]
})
@View({
  template: `
  <h1>{{ title }}</h1><h5>(I'm the BigTitle component)</h5>
  <h2>From InformationsService: {{ applicationName }}</h2>
  <h3>From InformationsService: {{ version }}</h3>
  `
})

export class BigTitle {
  constructor(@Inject(InformationsService) informationsService) {
    console.log("Hello!. I'm the constructor of the BigTitle component.");

    this.applicationName = informationsService.getApplicationName();
    this.version = informationsService.getVersion()

    console.log("-> version", informationsService.getVersion());
    console.log("-> applicationName", informationsService.getApplicationName())
  }
}