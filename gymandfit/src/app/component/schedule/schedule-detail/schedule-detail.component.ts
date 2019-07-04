import { Component, OnInit, OnDestroy } from '@angular/core';
import{ Schedule} from '../../../model/schedule.class';
import {ScheduleService} from '../../../services/schedule.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css','../../../../assets/css/animate.css',
  '../../../../assets/css/owl.carousel.min.css',
  '../../../../assets/css/magnific-popup.css',
  '../../../../assets/css/bootstrap.css',]
})
export class ScheduleDetailComponent implements OnInit , OnDestroy {
  public schedule : Schedule=null;
  public subscription: Subscription;

  constructor(
    public scheduleService: ScheduleService,
    //lay navigate
    public routerService : Router,
    //lay param
    public activateRoute : ActivatedRoute,
  ) { 
    
  }

  ngOnInit() {
    this.handleParams();
  
  }
  //su giao tiep giua cac component, vd cha goi con, con goi cha
ngOnDestroy(){
  if(this.subscription){
    this.subscription.unsubscribe();
  }
}
 handleParams(){
  this.subscription= this.activateRoute.params.subscribe(data=>{
    let id= data.id;
    this.schedule= this.scheduleService.getSchedulerById(id); 
  });
}
//quay tro lai trang list
onBackToList(){
  // this.routerService.navigate(['schedules/list']);
  this.routerService.navigate(['list'],
  { relativeTo : this.activateRoute.parent

  }
  );
}
}
