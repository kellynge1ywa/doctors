import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { navbar } from "../navbar/navbar.component";
import { footer } from "../footer/footer.component";
import { RouterModule } from "@angular/router";

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatIconModule } from '@angular/material/icon';
import { usersComponent } from "../users/users.component";

@Component({
    selector:'home',
    standalone:true,
    imports:[CommonModule, RouterModule,navbar,usersComponent, footer,FontAwesomeModule,MatIconModule,IonicModule],
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class home{
image="assets/img/doctor.png"


}