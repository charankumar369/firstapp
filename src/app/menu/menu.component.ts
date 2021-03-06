import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] ;
  selectedDish:Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

  constructor(private dishSerivece:DishService) { }

  ngOnInit(): void { 
    this.dishes=this.dishSerivece.getdishes();
  }

}
