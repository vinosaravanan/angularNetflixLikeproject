import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Showtime';
  navbar:any;

  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolltop' );
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbar = {
        'background-color':'#000000'
      }
    }else{
        this.navbar = {}
    }
  }
  
}
