import { Food } from "./food";

export class CartItem {
    food: Food;
    quantity: number;
    price: number = 1;
  
    constructor(food: Food) {
      this.food = food;
      this.quantity = 1;
      this.calculateTotalPrice(); 
    }
  
    calculateTotalPrice(): void {
      this.price = this.food.price * this.quantity;
    }
  }