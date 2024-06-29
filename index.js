class Car {
    // Constructor method to initialize object properties
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    // Method to display the car's details
    displayDetails() {
      console.log(` I own a ${this.brand} car, and the Model is ${this.model}`);
    }
  }
  let myCar = new Car("Toyota", "Corolla");
let anotherCar = new Car("Honda", "Accord");

myCar.displayDetails();      // Output: Car: Toyota, Model: Corolla
anotherCar.displayDetails(); // Output: Car: Honda, Model: Accord

