import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector:'cardiologist',
    standalone:true,
    imports:[CommonModule,RouterModule],
    templateUrl:'./cardiologist.component.html',
    styleUrls:['./cardiologist.component.css']
    
})

export class cardiologist{

}