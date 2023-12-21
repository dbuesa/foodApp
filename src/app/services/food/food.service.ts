import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      './assets/images/Foods/fruits.jpg',
      './assets/images/Foods/meat.jpg',
      './assets/images/Foods/lasagna.jpg',
      './assets/images/Foods/pizza.jpg',
      './assets/images/Foods/hamburger.jpg'
    ]
  }
}
