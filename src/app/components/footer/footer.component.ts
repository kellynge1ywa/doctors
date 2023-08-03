import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector:'footer',
    standalone:true,
    imports:[CommonModule,RouterModule],
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css']
})

export class footer{

    newsletter="Subscribe to our newsletter"
    link="Links"
    service="Services"
    social="Socials"
    email="doctors@gmail.com"
    location="Nairobi, Kenya"
    phone="0721678099"


}