import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { sidenav } from "../side-nav/sidenav.component";

@Component({
    selector:'users',
    standalone:true,
    imports:[CommonModule,FullCalendarModule,sidenav],
    templateUrl:'./users.component.html',
    styleUrls:['./users.component.css']
})

export class usersComponent implements OnInit{
    constructor(){}

    ngOnInit(): void {
        
    }

    calendarOptions:CalendarOptions={
    
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin]
    }

}