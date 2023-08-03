import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { navbar } from "../navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { footer } from "../footer/footer.component";

@Component({
    selector:'about',
    standalone:true,
    imports:[CommonModule,navbar,RouterModule,footer],
    templateUrl:'./about.component.html',
    styleUrls:['./about.component.css']
})

export class about{
    
}