// Loop through an object and print the key-value pairs with their types

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let i in myObject) {
  console.log(i, ":", myObject[i]);
}
console.log(" ");
for (let i in myObject) {
  console.log("key:",i, "|", "type:", typeof (myObject[i]));
}
