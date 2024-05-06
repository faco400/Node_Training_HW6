function throttle(func, time) {
  let lastExecuted = 0;

  return function () {
    const now = Date.now();
    if (now - lastExecuted >= time) {
      func(this, arguments); // execute function
      lastExecuted = now;
    }
  }
}

function logExecuted() {
  console.log('function executed');
}

function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 2000);

window.addEventListener("scroll", throttledScrollHandler);