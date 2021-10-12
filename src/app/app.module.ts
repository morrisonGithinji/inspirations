import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { VotesComponent } from './votes/votes.component';
import { FormComponent } from './form/form';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateCountPipe } from './date-count.pipe';
import { HighlighterDirective } from './highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    VotesComponent,
    FormComponent,
    DetailsComponent,
    DateCountPipe,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
