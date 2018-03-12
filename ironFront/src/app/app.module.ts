import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

//services
import {ListService} from './services/list.service';

//extra libraries
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    DragulaModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
