
import {Injectable} from "@angular/core";
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
import { map, publishReplay, refCount ,startWith,catchError} from 'rxjs/operators';
import { Observable ,BehaviorSubject,throwError} from 'rxjs';
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
     
 }
 changeMessage(message: string) {
   this.messageSource.next(message);
  
 }


 handleError(error) {
   console.log("ERROR REPONSE OTHER THAN 200");
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
   return throwError(errorMessage);
}

 constructor(private httpclient:HttpClient)
 {
    
 }


}