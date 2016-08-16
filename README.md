**oprudkyi/js_error_alert** 

Show JavaScript/jQuery errors as browser alerts. 

Simplify development and testing

## About

- tired to check browser's console log for errors ?
- got complaints from users 'I click but nothing happens' ?
- ever teached end-users how to look at browser's console ?

This is very simple solution. 

JS/jQuery error alerter catches JS/jQuery errors and exception and provides simple way to show them.

Simple errors are catched via window.onerror handler.

Errors from jQuery (ajax, onclick etc) are hidden from window.onerror, so jQuery is patched in way to call error handler.

jQuery hooks are based on code found at :

- https://github.com/rollbar/rollbar.js/blob/master/src/plugins/jquery.js
- https://gist.github.com/ndbroadbent/5097601
- https://github.com/airbrake/airbrake-js/blob/master/dist/instrumentation/jquery.js



## Installation

### load base script (it sets window.onerror)
```html
	<script src="window_error_handler.js"></script>
```

### just after jquery core load jquery hooks 
```html
	<script src="jquery_error_handler.js"></script>
```

### Use custom handler to show errors

You can create own ```showUncaughtException(message)``` function and replace default one, 
place it a top of page as possible (before window_error_handler.js)

```js
var showUncaughtException = function(message) {
	"use strict";

	if(typeof message === "undefined") {
		return false;
	}
	alert(message);
};

```

## Contribute

This package is (yet) under development and refactoring but is ready for
production. Please, feel free to comment, contribute and help. I will be happy
to get some help to deliver tests.

## License

JS/jQuery error alerter is licensed under [The MIT License (MIT)](LICENSE).

(c) 2016 Oleksii Prudkyi <Oleksii.Prudkyi@gmail.com>
