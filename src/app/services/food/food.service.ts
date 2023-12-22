import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id:1,
        name: 'Assortment of fruit',
        price: 3.99,
        cookTime: '2-3',
        favorite: true,
        origins: ['Morocco', 'Spain'],
        stars: 3.5,
        imageUrl: '/assets/images/Foods/fruits.jpg',
        tags: ['Fast food', 'Dessert']
      },
      {
        id:2,
        name: 'Angus Hamburger',
        price: 13.99,
        cookTime: '10-15',
        favorite: false,
        origins: ['USA', 'France'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/hamburger.jpg',
        tags: ['Lunch', 'Certified meat']
      },
      {
        id:3,
        name: 'Lasagna',
        price: 11.99,
        cookTime: '20-25',
        favorite: false,
        origins: ['Italy', 'France'],
        stars: 4,
        imageUrl: '/assets/images/Foods/lasagna.jpg'
      },
      {
        id:4,
        name: 'Margherita Pizza',
        price: 13.99,
        cookTime: '12-18',
        favorite: true,
        origins: ["Italy"],
        stars: 3,
        imageUrl: '/assets/images/Foods/pizza.jpg'
      },
      {
        id:5,
        name: 'Lemon Chicken',
        price: 8.99,
        cookTime: '15-20',
        favorite: false,
        origins: ['Spain'],
        stars: 4,
        imageUrl: '/assets/images/Foods/meat.jpg'
      },
      {
        id:6,
        name: 'Brownie',
        price: 5.99,
        cookTime: '3-5',
        favorite: true,
        origins: ['Dark temptation', 'USA'],
        stars: 5,
        imageUrl: '/assets/images/Foods/brownie.jpg'
      },
      {
        id:7,
        name: 'Bolognesa',
        price: 9.99,
        cookTime: '15-20',
        favorite: true,
        origins: ['Italy'],
        stars: 3.5,
        imageUrl: '/assets/images/Foods/bolognesa.jpg'
      },
      {
        id:8,
        name: '"Croquetas"',
        price: 4.99,
        cookTime: '2-4',
        favorite: true,
        origins: ['Spain'],
        stars: 5,
        imageUrl: '/assets/images/Foods/croquetas.jpg'
      }
    ]
  }
}
