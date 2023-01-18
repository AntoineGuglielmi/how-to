In `./assets/css/main.css` file:

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');
```

Then, in `./tailwind.config.js` file:

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      // ...
      fontFamily: {
        'customFamily': 'Nunito, sans-serif', // better if backup sans-serif is specified
      },
      // ...
    }
  }
}
```

And finally, in template:

```html
<p class="font-customFamily">Hello world!</p>
```
