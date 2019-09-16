import { Component, OnInit } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';
import { map, publishReplay, refCount ,startWith} from 'rxjs/operators';
import {NgbCarouselConfig, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-omdb-test',
  templateUrl: './omdb-test.component.html',
  styleUrls: ['./omdb-test.component.css'],
  providers:[NgbCarouselConfig]
})
export class OmdbTestComponent implements OnInit 
{
   title:string;

   result:Object;

  constructor(private omdbService: OmdbServiceClient,config: NgbCarouselConfig) 
  {

      config.interval=3000;
      config.wrap=true;
      config.keyboard=false;
      config.pauseOnHover=false;
   }
   

  ngOnInit() 
  {
  }

}
