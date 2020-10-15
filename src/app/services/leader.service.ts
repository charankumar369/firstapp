import { Injectable } from '@angular/core';
import { LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
 
  getLeaders():Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }
  getFeaturedLeaders():Promise<Leader>{
    return Promise.resolve(LEADERS.filter((pro)=>(pro.featured))[0]);
  }
  constructor() { }
}
