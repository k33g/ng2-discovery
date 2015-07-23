
export class InformationsService {

  constructor() {
    this.applicationName = "NG2-discovery";
    this.version = "01-services";
  }

  getApplicationName() {
    return this.applicationName;
  }

  getVersion() {
    return this.version;
  }
}