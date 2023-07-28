export class ParentClass {

  /**
   * Since we are creating a generic controller, hence to save the data a parent
   * class is created which works with common controller
   * 
   * modelName variable is used to create the dynamic model object
   * 
   * Component Link is reserved for future development
   */
    componentLink = '';
    modelName = '';
  
    constructor(modelName : string, componentLink : string){
      this.componentLink = componentLink;
      this.modelName = modelName;
    }
  }

  /**
   * Google Map link was considered as unsafe to show on the screen
   * To by bypass the security check and show the required information on
   * the screen Below Code is added
   * 
   * This implementation is used at 2 pages i.e. Accomodation and Partner Universities
   */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
  