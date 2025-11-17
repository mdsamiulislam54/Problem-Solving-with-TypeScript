#

<h1>What are some differences between interfaces and types in TypeScript?
</h1>

# Interface

<p>ইন্টারফেস হলো অবজেক্টের স্ট্রাকচার (structure) define করার একটি সিস্টেম।
এটির মাধ্যমে আমরা আগে থেকেই নির্ধারণ করতে পারি যে, অবজেক্টের কোন প্রপার্টি কোন type-এর হবে।</p>

### ইন্টারফেস ব্যবহার করার সুবিধা

#### Consistency বজায় রাখা

* বড় প্রজেক্টে ডাটা কনসিস্টেন্ট রাখা সহজ হয়।

#### API response structure define করা

* API থেকে আসা ডাটা ঠিক কোন structure হবে তা আগে থেকেই জানা যায়।

#### Function ও Class-এ ব্যবহার করা যায়

* ইন্টারফেসকে class implement করতে পারে বা function parameter হিসেবে ব্যবহার করা যায়।

#### Compile-time error

* ভুল প্রপার্টি access করলে TypeScript compile-time-এ error দেখাবে।

```
interface IUser {
  id: number;
  name: string;
  email: string;
}

const user: IUser = {
  id: 1,
  name: "Rahim",
  email: "rahim@gmail.com"
};


এখানে user অবজেক্টটি অবশ্যই IUser ইন্টারফেসের structure মানতে হবে।
যদি কোনো প্রপার্টি মিস করা বা টাইপ ভুল হয়, TypeScript error দেখাবে।

```

# Type 

Type হলো TypeScript-এর একটি system যা দিয়ে আমরা কোনো ভ্যারিয়েবল, অবজেক্ট, function বা structure-এর type নির্ধারণ করতে পারি।

* Type ইন্টারফেসের মতো object structure define করতে পারে।

* এছাড়া union type, intersection type, tuple, function type ও define করা যায়।

* Type ব্যবহারের সুবিধা

#### 1. Advanced type definition

* Primitive, union, intersection, tuple বা function type define করা যায়।

#### 2. Code readability & maintainability

* Type দিয়ে কোড structure স্পষ্ট হয়।

#### 3. Compile-time safety

* ভুল type assignment হলে compile-time-এ error দেখাবে।

#### 4. Reusable type

* একবার type define করলে project জুড়ে reuse করা যায়।

``` 
Type এর বিভিন্ন ব্যবহার
1️⃣ Primitive / Union type
type valueType = string | number | boolean;

let a: valueType;
a = "hello";  // ok
a = 10;       // ok
a = true;     // ok

2️⃣ Object type
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Rahim",
  email: "rahim@gmail.com"
};

3️⃣ Function type
type Add = (a: number, b: number) => number;

const sum: Add = (x, y) => x + y;

4️⃣ Intersection type
type A = { x: number };
type B = { y: string };
type C = A & B;

const obj: C = { x: 5, y: "hello" };

5️⃣ Tuple
type Point = [number, number];
const p: Point = [10, 20];

```