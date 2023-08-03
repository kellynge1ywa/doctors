import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { navbar } from "../../navbar/navbar.component";


@Component({
    selector:'docLogin',
    standalone:true,
    imports:[CommonModule,navbar],
    templateUrl:'./doctorLogin.component.html',
    styleUrls:['./doctorLogin.component.css']

})

export class doctorLogin implements OnInit{

    constructor(private router:Router){}
    ngOnInit(): void {
        
    }
    goToDoctorDashboard(){
        this.router.navigate(['doctors'])
    }
    
}