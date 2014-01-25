# greet.js

[![Build Status](https://travis-ci.org/hi/greet.js.png?branch=master)](https://travis-ci.org/hi/greet.js)

Generate time-based greeting messages

## Demo
Checkout our awesome [demo][demo].

[demo]: http://htmlpreview.github.io/?https://github.com/hi/greet.js/blob/master/index.html

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/hi/jquery-greet/master/dist/jquery.greet.min.js
[max]: https://raw.github.com/hi/jquery-greet/master/dist/jquery.greet.js

In your web page:

```html
<h1 data-greet>John</h1>
```

Based on user time machine, the output will be:

```html
<h1>Hello John Doe, how is going your morning?</h1>
```

```html
<h1>Good night, John.</h1>
```

### jQuery version

```js
jQuery(function($) {
  $('[data-greet]').greet();
});
```

## Examples
```js
  {
    time: "now",
    messages: {
      "12 AM": [
        "It's bed time, {name}"
      ],
      "05 AM": [
        "Good morning, {name}"
      ],
      "12 PM": [
        "Good afternoon, {name}"
      ],
      "06 PM": [
        "Good evening, {name}"
      ],
      "09 PM": [
        "Good night, {name}",
        "Have a great night, {name}"
      ]
    }
  }
```

## Documentation
_(Coming soon)_

## Release History
_(Nothing yet, but almost there)_
