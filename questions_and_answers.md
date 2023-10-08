<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ReferenceError: greetign is not defined

<i>In the code provided, there's a typographical error in the variable name. Instead of greeting, it's written as greetign, which is not defined. JavaScript will throw a ReferenceError because it cannot find a variable named greetign.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 12

<i>In JavaScript, when you use the + operator with one or more strings, it performs string concatenation. In this case, 1 is a number, and "2" is a string. When you add them together with +, JavaScript converts the number 1 to a string and concatenates it with "2", resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  `['🍕', '🍫', '🥑', '🍔']`

<i>In the code provided, info.favoriteFood is assigned the string "🍝", but it doesn't affect the food array. The food array remains unchanged, and its original values are still ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: `Hi there, undefined`

<i>In the code provided, the sayHi function expects a name argument to be passed when it is called. However, in the console.log(sayHi()); line, no argument is provided when calling sayHi(), so name becomes undefined. Therefore, the function returns "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 2

<i>In the provided code, the forEach method iterates over each element in the nums array. However, the if (num) condition checks whether num is truthy or not. Since 0 is considered falsy in JavaScript, it won't increment the count when num is 0. Therefore, count will only be incremented for the values 1, 2, and 3, resulting in a final value of 2.</i>

</p>
</details>
