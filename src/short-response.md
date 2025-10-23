# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

There is a reference error because you are defining `currentStatus` inside the socpe of the curly brackets. To fix this you need to define `currentStatus` outside the if and else statements as an empty variable, then assign it its value depending on which condition is true.

```javascript
const react = (isReuben) => {
    let currentStatus;
  if (isReuben) {
    currentStatus = 'Everything is just fine';
  } else {
    currentStatus = 'Time to panic.'
  }
  
  console.log(currentStatus);
}

react(true);
```


### Question 2

The following code logs Micheal Jordan. This is because when we access the value of name in the object using dot notation, then set it equal to a new vlaue (Micheal Jordan), we are reasigning the old value to the new value we set it equal to. Even though we changed it in `bestPlayer`, since the value of bestPlayer is saved into `theGoat`, we are accessing the specific value so it changes in both.  


### Question 3

`shoutOut()` will log Paul is the hardest... This is because the variable was defined inside the scope of the function.

```console.log(`${theHustler} is also the hardest working person in the room.`);``` will log Laisha is also the... This is because the variable was defined outside the function. 



### Question 4

# What are 'rest parameters'?

When you're making a function and don't know how many parameters you're going to need, you use rest parameters. This allows a function to accept an unlimited number of arguments as an array.

# How to turn a parameter into a rest parameter and use them in functions

The syntax to use a rest parameter is `...`. 

To turn a parameter into a rest parameter, all you need to do is add the three dots before the parameter you put. This will turn that parameter into an array that can take in multiple inputs for the function you're making. 

## Remember 

* If you have more than one parameter, put the three dots only in the last parameter.
* A function can only have one rest parameter.

# Example
In the example below, we're using a rest parameter on numbers so that it takes in any amount of numbers and then returns the total of those numbers.

```javascript
const sum = (...numbers) => {
    let total = 0
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}
```


### Question 5


### Question 6


### Question 7

The values in `fruits` will stay the same while the last value in `fruitsMinusOne` will be removed. 

It is necessary to make a copy of the arrray so that way we don't lose the values of the orginal array. This is important for when we want to reuse the values in the original array for something else.   

### Question 8

