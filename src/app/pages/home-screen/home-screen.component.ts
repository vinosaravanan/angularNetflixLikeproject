import { Component,OnInit } from '@angular/core';
import { MovieApiserviceService } from 'src/app/service/movie-apiservice.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent{

  constructor(private service:MovieApiserviceService){}
   pannerResult:any = []
   trendingData:any = []


  ngOnInit():any{
   this.pannerGet();
   this.rendGetData();
  }
  pannerGet(){
    this.service.bannerApiData().subscribe(result => {
       console.log(result);
      this.pannerResult = result.results;
    })
  }
  rendGetData(){
    this.service.TredingData().subscribe(result => {
      console.log(result);
      this.trendingData = result.results;
    })
  }

}
