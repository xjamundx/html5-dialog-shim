# HTML5 Dialog Shim

I saw the [HTML5 Dialog Spec](http://dev.w3.org/html5/spec/commands.html#the-dialog-element) the other day and thought it would be fun to implement a shim for it.

See the [demo](http://xjamundx.github.com/html5-dialog-shim/).

## Getting Started

Include the `dialog.css` as well as the `dialog.js` file and you can start playing with HTML5 dialogs.

## Example

```javascript
// create a new dialog box
var dialog1 = new Dialog();
document.body.appendChild(dialog1.el);
dialog1.el.setAttribute("id", "dialog1")
dialog1.el.innerHTML = "bla bla bla";

// create a dialog box from existing html
var dialog2 = new Dialog("dialog2");
```

## Todo

- Make it pretty.
- Figure out what to do with `returnValue`.
- Figure out how to deal with `showModal`.
- Think of other ways to trigger `close()` than `esc`.
- Figure out the "default static position".
- Figure out how to handle the "pending dialog stack".
- Figure out "Anchor points"
- Implement the `cancel` event.
- Implement proper error throwing as per spec.

## Browser Requirements

- `window.addEventListener` support as in IE9, Chrome 1+, Opera 7+, Safari 1.0+, Firefox 1.0+
- Basic HTML5 support as found in the same browsers.

## Random Thoughts

We could probably improve browser support by making this part of jQuery or doing some fancy `document.createElement` stuff. This thing kind of sucks at the moment, but hopefully it will one day be cool.