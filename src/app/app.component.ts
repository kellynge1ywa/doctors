import { AfterViewInit, Component } from '@angular/core';
import { AngularMessageBoxService } from 'ng-message-box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {
  title = 'doctors';
  constructor(private notification:AngularMessageBoxService){}

  ngAfterViewInit(): void {
      setTimeout(()=>{
        this.notification.SHOW_SUCCESS_MESSAGE("Welcome")


      },4000)
  }

}
