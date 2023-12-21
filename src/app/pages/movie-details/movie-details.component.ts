import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiserviceService } from 'src/app/service/movie-apiservice.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  getmovieDetailresult:any;
  videoresult:any;
  castresult:any;

  constructor(private service:MovieApiserviceService,private routing:ActivatedRoute){}

  ngOnInit(){
  let getIdparams = this.routing.snapshot.paramMap.get('id')
  console.log(getIdparams,'getparamsId')
  this.getData(getIdparams);
  this.getvideo(getIdparams);
  this.getcast(getIdparams);
  }

  getData(id:any){
    this.service.getMovieData(id).subscribe(result => {
      console.log(result);
       this.getmovieDetailresult = result; 
    })
  }

 getvideo(id:any){
  this.service.getMovievideo(id).subscribe(result => {
    console.log(result,'getvideo');
    result.results.forEach((element:any) => {
      if(element.type == "Trailer"){
        this.videoresult = element.key;
      }

    });
   
  })
 }

 getcast(id:any){
  this.service.getMovieCast(id).subscribe(result => {
    console.log(result,'getcast');
    this.castresult = result.cast;
  })
 }



}
