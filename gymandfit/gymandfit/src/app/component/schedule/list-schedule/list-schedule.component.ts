import { Component, OnInit, OnDestroy } from '@angular/core';
import{ Schedule} from '../../../model/schedule.class';
import {ScheduleService} from '../../../services/schedule.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css','../../../../assets/css/animate.css',
  '../../../../assets/css/owl.carousel.min.css',
  '../../../../assets/css/magnific-popup.css',
  '../../../../assets/css/bootstrap.css',]
})

export class ListScheduleComponent implements OnInit, OnDestroy {
  public schedules : Schedule[]=[];
   public name : string;
  public price: number;
  public starday : string;
  public img : string;

  public queryParamsSubscription: Subscription;
  

  

  constructor(
    public scheduleService: ScheduleService,
    public routerService : Router,
    public activateRoute : ActivatedRoute,


  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.activateRoute.queryParams.subscribe(data=>{
      let name= data['name'];
      let price= data['price'];
      let starday= data['starday'];
      let img = data['img'];
      this.schedules= this.scheduleService.getAllSchedule();
        console.log(img);
    })
  }
  ngOnDestroy(){
    if(this.queryParamsSubscription){
      this.queryParamsSubscription.unsubscribe();
    }

  }

}
