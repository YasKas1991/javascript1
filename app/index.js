const customer = {
  firstName: "Yaser",
  lastName: "Kasim",
  id: 50,
  phoneNumber: "0739884325",
  email: "yaskas@outlook.com",
};

customer.address = {
  street: "Amazing street",
  city: "London",
  state: "Middlesex",
  zipcode: "NW67EU",
}; // did not understand syntax so that i could mutate objects

console.log(`Welcome, ${customer.firstName}`);

const quantity = 100;
const product = {
  name: "",
  price: 10,
  description: "",
  quantity: "0",
};
//quantity is variable in scope of object product
const total = product.price * 7;
//total is global variable
console.log(total >= 100);

//product.quantity = product.quantity -7;
product.quantity -= 7;

if (product.quantity) {
  console.log("It's in stock");
} else {
  console.log("Out of stock");
}
// This time we are using an object as the value (nested objects)
// Objects are passed by REFERENCE!
  productVerbiage,

// Any non-empty string is truthy

/**
 * TODO: Assign your own values to meet the conditions below:
 * 1. Declare an object, `customer`. Initialize it with the following properties:
 *  - `firstName`
 *  - `lastName`
 *  - `id`
 *  - `phoneNumber`
 * - `email`
 *
 * All should be strings except for `id`, which should be a number.
 *
 * 2. Mutate `customer` to add another property. Name it `address`. The value should be another object (nested objects) with the following properties:
 *  - `street`
 * - `city`
 * - `state`
 * - `zipCode`
 *
 * Use strings for all of these values.
 *
 * 3. Use a template literal to `console.log` a message, "Welcome, <firstName> <lastName>!". Use the `customer` object, interpolation and dot notation to access the appropriate properties.
 *
 * 4. Create a new object, `product` (or give it a better name). Initialize it with the following properties:
 * - `name`
 * - `price`
 * - `description`
 * - `quantity`
 *
 * name and description are strings. Others are numbers.
 *
 * 5. Pretend that the customer has added 7 of the product to their cart (Insure that the value you used for 'quantity' above is over 7.).
 * You need to `log` a message to the screen that says, "Total: $<total>". Calculate the appropriate total by multiplying the price of the product by the quantity. Once again, use interpolation in your template literal.
 *
 * 6. Log a new message that prints either 'true' or 'false' to the screen depending on whether or not the customer spent over $100. Use conditional operators to accomplish this. Don't worry about the '$' symbol. Just use the number 100.
 *
 * 7. Update `product` to reflect the new quantity. In other words, the new quantity value should be 7 less than whatever you initialized it with.
 */
