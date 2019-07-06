import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css',
  '../../../assets/css/animate.css',
  '../../../assets/css/owl.carousel.min.css',
  '../../../assets/css/magnific-popup.css',
  '../../../assets/css/bootstrap.css'
 
]
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('/xch/users/course?page=1&size=10').subscribe( r =>  {
      console.log(r);
    })
   }

  ngOnInit() {
  }

}
