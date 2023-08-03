import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'sidenav',
    standalone:true,
    imports:[CommonModule],
    templateUrl:'./sidenav.component.html',
    styleUrls:['./sidenav.component.css']

})

export class sidenav implements OnInit{
    constructor(private router:Router){}

    ngOnInit(): void {
        
    }
    goToHomePage(){
        this.router.navigate([''])

    }
    
}