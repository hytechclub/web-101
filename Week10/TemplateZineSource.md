# Template Zine Starter Code

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <main class="zine">
      <header class="zine-page page-1">
        <h1>[PUT YOUR TITLE HERE]</h1>
        <img class="full-img" src="[put your image here]" />
        <h2>Put your subtitle here</h2>
      </header>
      <section class="zine-page page-2">
        <h1>Page 2 Header</h1>
        <div>Page 2 content - make this whatever you want!</div>
      </section>
      <section class="zine-page page-3">
        <!-- put stuff for page 3 here... you get the idea -->
        
      </section>
      <section class="zine-page page-4">
      
      
      </section>
      <section class="zine-page page-5">
      
      
      </section>
      <section class="zine-page page-6">
      
      
      </section>
      <section class="zine-page page-7">
      
      
      </section>
      <footer class="zine-page page-8">
      
      
      </footer>
    </main>
  </body>
</html>
```

**style.css**

```css


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
}

h1 {
  color: #1c4587;
  text-align: center;
  font-style: italic;
  font-size: 180%;
}

h2 {
  background: #ead1dc;
  color: #741b47;
  font-family: monospace;
  text-align: center;
  font-size: 140%;
  font-weight: normal;
  margin: 0.2rem 0 0 0;
  padding: 0.2rem 0 0.2rem;
}

p {
  padding: 0.2rem;
  padding-top: 0.5rem;
  font-size: 105%;
}

ul {
  padding-left: 2rem;
  list-style: none;
}

.full-img {
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  padding: 1rem;
}

.mini-img {
  max-width: 10rem;
}

/* Any styles that you **only** want to appear on a device should go in here! */

@media screen {
  body {
    max-width: 30rem;
    background: #ead1dc;
    margin: auto;
  }

  .zine {
    background: white;
    padding: 10px;
    border-left: 4px solid #741b47;
    border-bottom: 4px solid #741b47;
    
  }
  
  .zine-page {
    margin-top: 10px;
  }
}

/* Any styles that you want to apply **just** when the zine is printed go in here! */

@media print {
  body {
    font-size: 69%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @page {
    size: landscape;
    margin: 0;
  }
  
  .zine {
    width: 99vw;
    height: 99vh;
    display: grid;
    gap: 1.5px;
    background: lightgrey;
    grid-template-areas:
      "page-5 page-4 page-3 page-2"
      "page-6 page-7 page-8 page-1";
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(2, 50%);
  }

  .zine-page {
    background: white;
    padding: .2rem;
    overflow: hidden;
  }

  .page-5, .page-4, .page-3, .page-2 {
    transform: rotate(180deg) translateX(-0.1px);
  }

  .page-1 {
    grid-area: page-1;

  }

  .page-2 {
    grid-area: page-2;

  }

  .page-3 {
    grid-area: page-3;
  }

  .page-4 {
    grid-area: page-4;
  }

  .page-5 {
    grid-area: page-5;
  }

  .page-6 {
    grid-area: page-6;
  }

  .page-7 {
    grid-area: page-7;
  }

  .page-8 {
    grid-area: page-8;
  }
}
```
