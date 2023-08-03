import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navbar } from './components/navbar/navbar.component';
import { footer } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import interactionPlugin from '@fullcalendar/interaction'
import { IonicModule } from '@ionic/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AngularMessageBoxModule } from 'ng-message-box';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    navbar,
    footer,
    AngularMessageBoxModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    
  
    IonicModule.forRoot(),
            CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
