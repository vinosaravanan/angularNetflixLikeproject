import { Component } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms'
import { MovieApiserviceService } from 'src/app/service/movie-apiservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  serachResult:any;
  serchForm = new FormGroup({
    'movieName': new FormControl(null)

  });
  constructor(private service:MovieApiserviceService){}

  submitform(){
    console.log(this.serchForm.value,'serach####');
    this.service.getSearchData(this.serchForm.value).subscribe(result=> {
      console.log(result,'#########');
      this.serachResult = result.results
    }) 
  }

}
