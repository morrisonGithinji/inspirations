import { Component, OnInit } from '@angular/core';
import {quotes} from 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=
  [
   new Quote('.The purpose of our lives is to be happy.', 'Dalai lama','Morris', new Date ('08/24/2020')),
   new Quote('Many of lifes failures are people who did not realize how close they were to success when they gave up.','Thomas A. Edison','Morris',new Date('2020,08,1')),
   new Quote('You only live once, but if you do it right, once is enough.', 'Mae West','Morris', new Date('08-07-2020')),
  

 ];
      deleteQuote(toDelete, index){
       if (toDelete) {
        this.quotes.splice(index, 1);
      }
  }
    createNewQuote(quote){
      this.quotes.push(quote);

    }
    viewDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
