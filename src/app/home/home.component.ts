import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstDish: string;
  inputEl: string;

  constructor(private dishesService: DishesService) {

   }

  ngOnInit() {
    this.dishesService.getFirstDish().subscribe((res) => {
      console.log(res);
      this.firstDish = res;
    });
  }

  addDish(dishName: string) {
    this.dishesService.addDish(dishName);
  }

  addDishFromInput() {
    this.dishesService.addDish(this.inputEl);
  }

}
