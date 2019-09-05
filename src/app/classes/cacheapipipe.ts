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

    console.log("cache pipe called");
    console.log(this.cachedAPIUrl);
    if(url!=this.cachedAPIUrl){

        console.log("server call");
        this.cachedAPIData=null;
        this.cachedAPIUrl= url ;

        this.http.get(url).subscribe(result=>this.cachedAPIData=result);

        console.log(this.cachedAPIData);

    }
    else{
        console.log("Data is returned from cache");
    }
    return this.cachedAPIData;
}

// get(title:String)
// {
    
//     if(this.cachedAPIData!=null){
//         return this.cachedAPIData;
//     }
//     else{
//         console.log("Cache is mull");
//     }
// }


}