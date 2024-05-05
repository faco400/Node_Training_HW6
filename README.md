# Node_Training_HW6
Repository focusing on Studying node with the focus on  Quasi-Tagged Templates, Advanced Tagged Template,  Multiline Tagged Template, Implementing Debounce Function, Implementing Throttle Function, Currying Function Implementation

### **Task 1: Quasi-Tagged Templates**

- You are working on a localization library that uses tagged templates to handle multiple languages. Implement a function called *`localize`* that acts as a quasi-tagged template. The function should take a template string and an object containing language-specific translations. It should replace placeholders in the template string with the corresponding translations from the provided object.

```js
const translations = {
	en: {
	greet: "Hello",
	intro: "Welcome to our website"
},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
};

const language = "fr"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")
```

### **Task 2: Advanced Tagged Template**

Create a function called **`highlightKeywords`** that acts as a tagged template. The function should take a template string and an array of keywords. It should highlight each occurrence of a keyword in the template by wrapping it in a `<span>` element with a specific CSS class. Use template literals and string manipulation to achieve this.

```js
const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
```

### **Task 3: Multiline Tagged Template**

Implement a multiline tagged template function called `multiline` that takes a template string and returns a string with line numbers added at the beginning of each line. The line numbers should start from 1 and increase for each line. Preserve the original indentation of each line.

```js
const code = multiline\`
function add(a, b) {
return a + b;
}
\`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }`
```