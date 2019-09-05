
import {Injectable} from "@angular/core";
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
import { map, publishReplay, refCount ,startWith} from 'rxjs/operators';
import { Observable ,BehaviorSubject} from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReplaceSource } from 'webpack-sources';

    
@Injectable()
export class OmdbServiceClient{  

   private messageSource = new BehaviorSubject('default message');
   currentMessage = this.messageSource.asObservable();
   title:String ="";
   
 searchMovieByTitle(title:String):Observable<any>
 {
    const url='http://www.omdbapi.com/?s='+title+'&apikey=a6c1ca03';

     return this.httpclient.get(url);
    //  console.log("service is working!");
    //  const url='http://www.omdbapi.com/?s='+title+'&apikey=a6c1ca03';

    //  return this.http.get(url)
    //  .map((response: Response)=>{

    //      return response.json();
    //  });

     
 }
 changeMessage(message: string) {
   this.messageSource.next(message);
   console.log("In change method");
 }

 search(title:String)
 {
  
    console.log("In service method");
     const url='http://www.omdbapi.com/?s='+title+'&apikey=a6c1ca03';

     return this.httpclient.get(url)
     .map((response: Response)=>{

         return response;
     });

     
 }
//  setTitle(title:String){
//   this.title=title;
//  }

//  getTitle(){
//    console.log("getUrls:"+this.title);
//    return this.title;
   
//   }

 constructor(private httpclient:HttpClient)
 {
    // const url='http://www.omdbapi.com/?s=batman&apikey=a6c1ca03';
 
    // return this.http.get(url)
    // .map((response: Response)=>{

    //     return response.json();
    // });
 }


}