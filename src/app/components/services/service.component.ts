import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { navbar } from "../navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { footer } from "../footer/footer.component";

@Component({
    selector:'service',
    standalone:true,
    imports:[CommonModule,navbar,RouterModule,footer],
    templateUrl:'./service.component.html',
    styleUrls:['./service.component.css']
})

export class services{

}