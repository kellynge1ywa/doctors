import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector:'opthamologist',
    standalone:true,
    imports:[CommonModule,RouterModule],
    templateUrl:'./opthamologist.component.html',
    styleUrls:['./opthamologist.component.css']
})

export class opthamologist{

}