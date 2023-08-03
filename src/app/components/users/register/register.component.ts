import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { navbar } from "../../navbar/navbar.component";



@Component({
    selector:'register',
    standalone:true,
    imports:[CommonModule,RouterModule,navbar],
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})

export class register{
    constructor(private router:Router){}

    goToUserLoginPage(){
        this.router.navigate(['users/login'])
        
    
        
        

    };
    goToLoginPage(){
        this.router.navigate(['users/login'])
    }

    goToDoctorLogin(){
        this.router.navigate(['doctors/login'])
    }
    goToHomePage(){
        this.router.navigate([''])
    }
    
}