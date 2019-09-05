import { Component, OnInit,Input } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';
import { map, publishReplay, refCount ,startWith} from 'rxjs/operators';
import { DataService } from "../services/data.services";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
 
export class HeaderComponent implements OnInit {
 
  constructor(private omdbService: OmdbServiceClient,private data: DataService) 
  {
    
   }
  title :String="";
  message:string;
   
   result:Object;
  //  searchMovie(title:String){
  //     this.omdbService.search(title)
  //     .subscribe((result)=>{
  //         this.result=result;
  //         console.log(result);
  //         this.omdbService.setTitle(title);
  //     });
  //   }

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message); 
    }
    newMessage() {
    console.log("In new message method");
      this.data.changeMessage((document.getElementById("search") as HTMLInputElement).value);
    }

}
