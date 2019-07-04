import {Injectable} from '@angular/core'
//model
import {Schedule} from '../../app/model/schedule.class';

@Injectable()
export class ScheduleService {
   
    public schedules : Schedule []=[
            {id : 1, name : 'Yoga KQ', price : 500000, starday: '08/7/2019',img: '../../../../assets/img/img/gym4.jpg' },
            {id: 2, name: 'Gym HK', price : 200000, starday :'20/10/2019',img: '../../../../assets/img/img/gym2.jpg'},
            {id: 3, name: 'Gym BQ', price : 250000, starday :'20/10/2019',img: '../../../../assets/img/img/gym3.jpg'},
            {id: 4, name: 'Yoga Sieu Dinh', price : 700000, starday :'09/10/2019',img: '../../../../assets/img/img/gym4.jpg'},
            {id: 5, name: 'Gym sieuhinh', price : 300000, starday :'20/10/2019',img: '../../../../assets/img/img/gym5.jpg'}
     
            
     ]
     constructor() {
         
     }
     getAllSchedule(){
          return this.schedules;
     }
     getSchedulerById(id: number){
          let result=null;
      for(var i=0;i< this.schedules.length;i++){
          if(this.schedules[i].id==id){
               result=this.schedules[i];
               break;
          }
      }
            return result;
          }
}
