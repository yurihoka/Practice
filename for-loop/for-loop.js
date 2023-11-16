// const orders = [
//   { product: "burger", quantity: 2 },
//   { product: "fries", quantity: 1 },
//   { product: "shake", quantity: 1 },
//   { product: "soda", quantity: 1 },
// ];

// for (const order of orders) {
//     console.log(order);
// }

const student = {
  name: "Daniel",
  age: 24,
  college: "CICCC",
  rollNumber: 00,
};

for (const property in student) {
  console.log(student[property]);
}
