# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

There is a reference error because you are defining `currentStatus` inside the scope of the curly brackets in each `if/else` statement. That makes the variable unaccessible outside of it's scope. This is called block-scope and to fix this you would have to define the variable in the global scope which is outside of the `if/else` statement.

```javascript
const react = (isReuben) => {
  let currentStatus;
  if (isReuben) {
    currentStatus = "Everything is just fine";
  } else {
    currentStatus = "Time to panic.";
  }

  console.log(currentStatus);
};

react(true);
```

### Question 2

The following code logs Micheal Jordan. This is because both `bestPlayer` and `theGoat` reference the same object. This means that when you change the `name` property through `bestPlayer` you're modifying the same object so `theGoat.name` outputs the changed value.

### Question 3

`shoutOut()` will log `Paul is the hardest working person in the room` and `` console.log(`${theHustler} is also the hardest working person in the room.`);  ``

This is because the variable `theHustler` is read as two different variables since it was defined inside and outside the scope of the function. So when we `console.log` `theHustler` it is reading different values because of it's blocked-scope.

### Question 4

# What are 'rest parameters'?

When you're making a function and don't know how many parameters you're going to need, you use rest parameters. This allows a function to accept an unlimited number of arguments as an array.

# How to turn a parameter into a rest parameter and use them in functions

The syntax to use a rest parameter is `...`.

To turn a parameter into a rest parameter, all you need to do is add the three dots before the parameter you put. This will turn that parameter into an array that can take in multiple inputs for the function you're making.

## Remember

- If you have more than one parameter, put the three dots only in the last parameter.
- A function can only have one rest parameter.

# Example

In the example below, we're using a rest parameter on numbers so that it takes in any amount of numbers and then returns the total of those numbers.

```javascript
const sum = (...numbers) => {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};
```

### Question 5

#### What is scope?

Scope refers to where a variable is declared and the accessibility of that variable.

#### Analogy

You can think of scope like a living room in a house. A pillow in the living room can be used in the living room anywhere but I wouldn't be able to use it if I was in the bathroom. But if it was my house, I would have access to the whole house and I would be able to do anything.

#### Example

```JavaScript

const name = 'Evelin' // global scope

const greet = () => {
  const name = 'Cobos' // local scope
  console.log(name)
}

greet()
console.log(name)
```

In the example above, the variable `name` is declared in two locations. One is outside the function which creates a global scope and the other is inside the function which creates a local scope. When we call `greet()`, it prints `Cobos` because the variable in the function has priority since JavaScript always looks for the variable in the scope with the least reachability first.

### Question 6

#### What is Modules?

Modules are files containing code that can be imported and used in other files with a larger algorithm.

#### Benefits of Modules

- Keep an algorithm clean and organized by having each file focused on one thing
- Can be reused in different parts of your algorithm
- Easy to debug, update, and understand
- Make it easier for multiple people to understand all parts of the algorithm or project.

#### Example

```JavaScript
//In a file called math.js

const sum = (a, b) => {
  return a + b
}

module.exports = sum

//In another file called adding.js

const sum = require('./math.js');

console.log(sum(1, 2)) // Output: 3
```

The example above shows the files called `math.js` with a function that adds 2 numbers. Then by using `module.exports`, you can export the information in the `math.js` file and import it to the `adding.js` file using `require()`. Then you're able to use that function in the file called `adding.js`.

### Question 7

The values in `fruits` will stay the same while the last value in `fruitsMinusOne` will be removed because the function `removeLastPurely` makes a copy of the array meaning only that copy will be modified.

It is necessary to make a copy of the array to keep it the function pure because that way there will be no side effects like unwanted mutations. But since in JavaScript arrays are reference types, using a variable to make a copy would not work. The arrays would still use the same reference so to prevent this you can use the spread operator. That creates a shallow copy with a different reference and prevents any unwanted changes and bugs.

### Question 8

I would use an object because it can group together different data types of the item (`item`, `name`, `price`) and I would put them in an array since there would be multiple items and an array can be used to store a list of items.

```JavaScript
const choppingCart = [
{item: 1, name: 'Mac Book Pro', price: 999.99},
{
item: 1, name: 'Sony Headphones', price: 299.99
}
]
```
