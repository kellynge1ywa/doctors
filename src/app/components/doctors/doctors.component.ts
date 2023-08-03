import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from "@fullcalendar/core";
import { sidenav } from "../side-nav/sidenav.component";

@Component({
    selector:'doctors',
    standalone:true,
    imports:[CommonModule, FullCalendarModule,sidenav],
    templateUrl:'./doctors.component.html',
    styleUrls:['./doctors.component.css']

})

export class doctorDashboard implements OnInit{
    constructor(){}

    ngOnInit(): void {
        
    }
    calendarOptions:CalendarOptions={
    
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin]
    }

}