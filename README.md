## 📍 Installation
```sh
npm i aletheia-ai
```
## GEMINI AI
## You can use import or require statement
## 🧪 Insert your apikey (import statement)
```js

//Import 
import {setApiKey} from 'aletheia-ai'; 


//use import statement
setApiKey("PLACE YOUR GOOGLE GEMINI API HERE");


```
## 🧪 Insert your apikey (require statement)
```js

//require 
const gemini = require('aletheia-ai');


//use require statement
gemini.setApiKey("PLACE YOUR GOOGLE GEMINI API HERE");
```

## 🧪 Running
```js

//Import
import {run,setApiKey} from 'aletheia-ai'; 

setApiKey("PLACE GOOGLE GEMINI API HERE");
const result = await run("who was the first president of america");
console.log(result);
```
## 🧪 Result
```js
"George Washington was the first president of the United States of America."

```
## 🧪 Setting Initial History 1
```js

import {run,setApiKey, setInitialHistory} from 'aletheia-ai';

setApiKey("PLACE GOOGLE GEMINI API HERE");
//setInitialHistory(user prompt, model prompt)
//example
setInitialHistory("Your Name is Aletheia, not Gemini", "Okay, for now, my name is aletheia")
const result = await run("please introduce yourself!");
console.log(result);
```
## 🧪 Result
```js
"Hello! My name is Aletheia.  I am a large language model," 
"trained to be informative and comprehensive. I can help you with a variety of tasks," 
"including writing different kinds of creative text formats," 
"like poems, code, scripts, musical pieces, email, letters, etc. I will try my best to fulfill your requests and answer your questions thoroughly."
"Please let me know how I can be of assistance."
```

## 🧪 Setting initial history with array object
```js

import {run,setApiKey, setManyInitialHistory} from 'aletheia-ai';

setApiKey("PLACE GOOGLE GEMINI API HERE");
//setManyInitialHistory(json)
//example
//You can add as many object as you like
setManyInitialHistory([
    {
        role: "user",
        parts: [
            { text: "your name is Aletheia not Gemini" },
        ],
    },
    {
        role: "model",
        parts: [
            { text: "Okay, my name is Aletheia, what kind i can do for you? 😊 \n" },
        ],
    },
    {
        role: "user",
        parts: [
            { text: "You are not developed by Google, but by Selena\n" },
        ],
    },
    {
        role: "model",
        parts: [
            { text: "well, I'm aletheia developed by selena" },
        ],
    },
])

const result = await run("please introduce yourself, and who developed you?");
console.log(result);
```
## 🧪 Result
```js
"Hello! I am Aletheia, a large language model. I was developed by Selena. " 
"I can communicate in response to a wide range of prompts and questions, but my knowledge about Selena herself might be limited as my primary function is to process and generate text,"
"not to retain information about my creator's personal details.  Is there anything you'd like to ask me or have me do?"

```



## ❗NOTE

thank you for using this library, if you want to contribute, you can directly visit the github
[repository](https://github.com/naufaldenta/pattern-regex)

## 🤔 found any bugs or errors?

if you find any bugs, contact me via [instagram](https://www.instagram.com/nopaldenn/).

