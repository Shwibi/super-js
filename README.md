# shwi-js @0.0.3-alpha.2

---

## All updates are also on wiki.

[What is shwi-js?](#what-is-shwi-js) \
[Usage](#usage) \
[Feature List](#feature-list) \
[Main class](#main-class) \
[Random^](./Functions/Random.md) \
[Err^](./Utils/Err.md) \
[Stack^](./Stack/Stack.md) \
[Colors^](./Props/Color.md) \
[Parser^](./Sandbox/Parser.md)

## Installation

```
npm i shwi-js
```

## What is shwi-js?

Shwi-js is an easy to use npm module that allows you to make your javascript code better! It makes many things easier, and has many new classes and functions that are usually very annoying to code!

## Usage

```js
const shwijs = require("shwi-js");
```

Just require the shwi js module, and get to coding!

## Feature list

Latest update: `0.0.3-alpha.2`

1. Main class that can be extended by all your other classes.

   Logging feature \
   Can include all the objects or functions you need in every class \
   [View docs](#main-class)

2. Random item selector

   Input all your items into the Random function and get a random item back! \
   You can also specify particular items to have more chance in being picked! \
   [View docs](./Functions/Random.md)

3. Random integer from and to

   Get a random integer from specified integer to specified integer! \
   [View docs](./Functions/Random.md)

4. Log

   A raw log function if you're not using classes!

5. Custom error

   Custom errors that are better than normal errors! \
   Includes error ids \
   Includes node.js error automatically \
   Automatically sets the date and time of error \
   Auto-logs (can be turned off for all errors or just one error too) \
   Manual logs \
   JSON errors \
   [View docs](./Utils/Err.md)

6. Stack

   Better collection type! All items pushed to the top, and you can pop off the top item and get it back! \
   You can specify particular items if you only want some particular type of items in a stack \
   Create your own custom stacks by extending this! \
   [View docs](./Stack/Stack.md)

7. Colors

   Ability to colorize a string of text! You can format a string in any way, and it will be logged that way in the console! \
   You can also access the `shwijs#Colors` object to customise a string in your own way! \
   [View docs](./Props/Color.md)

8. Parser

   Create a new, easy to store storage file `.sjs`! No quotations involved, no curly brackets, just plain storage! \
   [View docs](./Sandbox/Parser.md)

## Main class

```js
const shwijs = require("shwi-js");
class MyClass extends shwijs.Main {
	constructor() {
		super("MyClass");
		this.Log("Hello!");
	}
}
const myClassInstance = new MyClass();
// Logs [Node/your_project_name/MyClass]: Hello to the console
```

To change the project name, you can do `shwijs.Main.APP_NAME = "whatever you want"`!
(By default, it takes the project name from your package.json file)

You can also pass in multiple names for the class `super()` function, if you're making class that is supposed to be part of another class:

```js
const shwijs = require("shwi-js");
class MyClass extends shwijs.Main {
	constructor(name) {
		super("MyClass", name);
	}
}
const myClassInstance = new MyClass();
class MyClassSubset extends MyClass {
	constructor() {
		super("SubsetA");
		this.Log("Hello!");
	}
}
const myClassSubsetInstance = new MyClassSubset();
// Logs [Node/app_name/MyClass/SubsetA]: Hello! to the console
```

You can also manually change the `app_name` in the console logs using `Main.SetAppName(name)` method! \
**NOTE**: This is a static method.
