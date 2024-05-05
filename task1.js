
function localize(strings, ...values) {
  // console.log(translations[language]);

  const translationTags = translations[language]
  let translatedString = '';

  strings.forEach((element, index) => {
    translatedString += element + (values[index] ? translationTags[values[index]] : '');
  });

  return translatedString;
}

const translations = {
	en: {
	greet: "Hello",
	intro: "Welcome to our website"
},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	},
  br: {
    greet: "Olá",
    intro: "Bem vindo ao nosso website"
  }
};

const language = "br"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")