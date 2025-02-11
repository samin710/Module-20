// For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log("Original:", car);
console.log("Keys are:", Object.keys(car));
console.log("Values are:", Object.values(car));
console.log("Length:", Object.keys(car).length);
console.log("Length:", Object.values(car).length);

car.capacity = 5;

console.log("After:", car);
console.log("After Keys are:", Object.keys(car));
console.log("After Values are:", Object.values(car));
console.log("After Length:", Object.keys(car).length);
console.log("After Length:", Object.values(car).length);