# Load Web Components With Javascript

A sample project demonstrating how to load web components with pure Javascript.

## Usage

1. Create your component html and css files.
2. Add a class for each component to `components.js` as follows (replace COMPONENT_CLASS_NAME with a name for your component's class):

```Javascript
class COMPONENT_CLASS_NAME extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = COMPONENT_CLASS_NAME._html;
  }
}
```

3. Add a call to the `loadView()` function for each component inside the `loadComponents()` function of `components.js`.
4. Call the `loadComponents()` function form your Javascript as follows:

```Javascript
import loadComponents from "./components.js";

document.addEventListener("DOMContentLoaded", () => {
  loadComponents().then(() => {
    start();
  });
});

function start() {
  // The rest of your Javascript.
}
```

Timing is important here. The DOM must first finish loading, then `loadComponents()` is called and allowed to complete, then you can call a `start()` function for the rest of your Javascript.

## Integrating With Automation & Control Systems

Here is a blog post covering how this project can be integrated as part of a larger automation & control system. https://www.learnavprogramming.com/html5-part-i/

## Acknowledgments

Thanks to [Anton Karsten](https://github.com/antonkarsten) for helping think this through.
