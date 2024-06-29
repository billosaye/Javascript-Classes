// Define a class named 'Car'
class Car {
    // Constructor method to initialize object properties
    constructor(brand, model) {
      // Assign the 'brand' parameter to the 'brand' property of the object
      this.brand = brand;
      // Assign the 'model' parameter to the 'model' property of the object
      this.model = model;
    }
  
    // Method to display the car's details
    displayDetails() {
      // Log a string with the car's brand and model to the console
      console.log(`I own a ${this.brand} car, and the Model is ${this.model}`);
    }
  }
  
  // Create a new 'Car' object with the brand 'Toyota' and model 'Corolla'
  let myCar = new Car("Toyota", "Corolla");
  // Create another 'Car' object with the brand 'Honda' and model 'Accord'
  let anotherCar = new Car("Honda", "Accord");
  
  // Call the 'displayDetails' method on the 'myCar' object
  myCar.displayDetails(); // Output: I own a Toyota car, and the Model is Corolla
  // Call the 'displayDetails' method on the 'anotherCar' object
  anotherCar.displayDetails(); // Output: I own a Honda car, and the Model is Accord
  