import { HttpModule } from '@angular/http';
import {Pipe,PipeTransform} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
    name:'cacheapi',
    pure:false
})

export class CacheAPIPipe implements PipeTransform{
private cachedAPIData:any=null;
private cachedAPIUrl:any; 
search=1;
constructor(private http:HttpClient)
{}
    transform(url:string):any
    {
    var t1=Date.now();
        console.log("cache pipe called");
        console.log(this.cachedAPIUrl);
        if(url!=this.cachedAPIUrl)
        {
            this.cachedAPIData=null;
            this.cachedAPIUrl= url ;

            this.http.get(url).subscribe(result=>this.cachedAPIData=result);
            var t2=Date.now();
            // console.log(this.cachedAPIData);
            console.log("server call with Response time:"+(t2-t1));
        }
        else{
            var t3=Date.now();
            console.log("Data is returned from cache"+(t3-t1));
        }
        return this.cachedAPIData;
        
        t1=0;
        t2=0;
    }
}