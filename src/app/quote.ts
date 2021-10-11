export class Quote {

  
  public showDetails: boolean;

  constructor(public quote: string,public Author: string,public creator: string, public created: Date){
    this.showDetails=false;
  }
}
