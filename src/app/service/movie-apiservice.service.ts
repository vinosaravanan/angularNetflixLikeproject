import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieApiserviceService {

  constructor(private http:HttpClient) { }

  bannerApiData():Observable<any>
  {
     return this.http.get("https://api.themoviedb.org/3/trending/all/week?api_key=08cc33bd5ae3a747598ce2ad84376e66")
  }
  
  TredingData():Observable<any>
  {
     return this.http.get("https://api.themoviedb.org/3/trending/movie/day?api_key=08cc33bd5ae3a747598ce2ad84376e66")
  }

  getSearchData(data:any):Observable<any>
  {
    console.log(data,'movie');
    
     return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&query=${data.movieName}`)
  }

  getMovieData(data:any):Observable<any>
  {
    console.log(data,'movie');
    
     return this.http.get(`https://api.themoviedb.org/3/movie/${data}?api_key=08cc33bd5ae3a747598ce2ad84376e66`)
  }


  getMovievideo(data:any):Observable<any>
  { 
     return this.http.get(`https://api.themoviedb.org/3/movie/${data}/videos?api_key=08cc33bd5ae3a747598ce2ad84376e66`)
  }

  
  getMovieCast(data:any):Observable<any>
  {  
     return this.http.get(`https://api.themoviedb.org/3/movie/${data}/credits?api_key=08cc33bd5ae3a747598ce2ad84376e66`)
  }



}
