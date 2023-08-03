import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector:'navbar',
    standalone:true,
    imports:[CommonModule,RouterModule],
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class navbar implements OnInit{

    constructor( private router:Router) {
        
    }

    ngOnInit(): void {
        
    }
    goToHomePage(){
        this.router.navigate([''])
    }


   

}