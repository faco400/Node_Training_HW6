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