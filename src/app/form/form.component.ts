import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quote("", "","",new Date());
  @Output()createQuote = new EventEmitter<Quote>()

  submitQuote(){
    this.createQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
