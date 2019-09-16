import { Component, OnInit,Input } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';
import { map, publishReplay, refCount ,startWith} from 'rxjs/operators';
import { DataService } from "../services/data.services";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
 
export class HeaderComponent implements OnInit {
 
  constructor(private omdbService: OmdbServiceClient,private data: DataService,private spinner: NgxSpinnerService) 
  {
    
   }
  title :String="";
  message:string;
   
   result:Object;

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message); 
    }
    newMessage() {
    console.log("In new message method");
      this.data.changeMessage((document.getElementById("search") as HTMLInputElement).value);
      this.openSpinner();
    }
    openSpinner()
    {
      this.spinner.show();
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 2000);
    }

}
