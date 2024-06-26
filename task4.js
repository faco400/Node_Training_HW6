function debounce(func, delay) {
  let timeoutId;
  console.log(this);
  console.log(arguments);
  
  return function() {
      const context = this;
      const args = arguments;
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay)
  };
}

function debouncedSearch(query) {
// Perform search operation with the query
console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 1000);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
  debouncedSearchHandler(event.target.value);
});