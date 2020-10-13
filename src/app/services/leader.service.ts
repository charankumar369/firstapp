import { Injectable } from '@angular/core';
import { LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
 
  getLeaders():Leader[]{
    return LEADERS;
  }
  getFeaturedLeaders():Leader{
    return LEADERS.filter((pro)=>(pro.featured))[0];
  }
  constructor() { }
}
