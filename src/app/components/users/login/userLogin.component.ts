import { CommonModule } from "@angular/common";
import{Component} from "@angular/core"
import { Router } from "@angular/router";
import { navbar } from "../../navbar/navbar.component";

@Component({
    selector:'user-login',
    standalone:true,
    imports:[CommonModule,navbar],
    templateUrl:'./userLogin.component.html',
    styleUrls:['./userLogin.component.css']
    

})

export class userLogin{
    constructor(private router:Router){}

    goToUserDashboard(){
        this.router.navigate(['users'])

    }

}