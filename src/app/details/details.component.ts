import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() toDelete = new EventEmitter<boolean>();

  quoteDelete(Delete:boolean){
    this.toDelete.emit(Delete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
