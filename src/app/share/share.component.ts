import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import { DishesService } from '../services/dishes.service';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  dishes: string[];

  constructor(route: ActivatedRoute, private dishesService: DishesService) {
    route.queryParams.subscribe((params) => {
      console.log(params);
    });
   }

  ngOnInit() {
    this.dishes = this.dishesService.getDishes();
  }

}
