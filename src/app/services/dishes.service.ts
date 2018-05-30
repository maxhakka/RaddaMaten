import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishesService {
  dish: BehaviorSubject<string> = new BehaviorSubject(null);
  dishes: string[] = [];
  

  constructor() { }

  addDish(dish: string) {
    this.dishes.push(dish);
    this.dish.next(dish);
  }

  getDishes(): string[] {
    return this.dishes;
  }

  getFirstDish(): Observable<string> {
    return this.dish;
  }
}
