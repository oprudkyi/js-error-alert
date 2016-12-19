**oprudkyi/js-error-alert** 

![Bower version](https://img.shields.io/bower/v/js-error-alert.svg)
[![npm version](https://img.shields.io/npm/v/js-error-alert.svg)](https://www.npmjs.com/package/js-error-alert)
[![npm downloads](https://img.shields.io/npm/dt/js-error-alert.svg)](https://www.npmjs.com/package/js-error-alert)

Simple way to show JavaScript/jQuery errors as browser alerts. 

Make more easy to catch errors on development and testing

## About

- forgot to check browser's console log for errors ?
- got complaints from users 'I click but nothing happens' ?
- ever taught end-users how to look at browser's console ?

There is small and simple library to avoid or at least reduce possibility of such problems, specially in case if code isn't covered by tests.   

JS/jQuery error alerter catches JS/jQuery errors and exceptions and provides simple way to show them.

Simple errors are caught via window.onerror handler.

Errors inside jQuery callbacks (ajax, onclick etc) are hidden from window.onerror(), so jQuery is patched in way to call error handler.

jQuery hooks are based on code found at :

- https://github.com/rollbar/rollbar.js/blob/master/src/plugins/jquery.js
- https://gist.github.com/ndbroadbent/5097601
- https://github.com/airbrake/airbrake-js/blob/master/dist/instrumentation/jquery.js



## Installation

```
bower install js-error-alert --save
```

```
npm install js-error-alert
```

### load base script (it sets window.onerror)
```html
	<script src="window_error_handler.js"></script>
```

### add jQuery hook just after jQuery core code  
```html
	<script src="jquery-1.11.1.min.js"></script>
	<script src="jquery_error_handler.js"></script>
```

### Use custom handler to show errors

You can create own ```JSEH_showUncaughtException(message)``` function and replace default one, 
place it the top of the page (before window_error_handler.js)

```js
var JSEH_showUncaughtException = function(message) {
	"use strict";

	if(typeof message === "undefined") {
		return false;
	}
	alert(message);
};

```

### Enable/disable error handler

In case you need to dynamically enable/disable handler (by example if js merging/minifying tools are used) you can 
set ```JSEH_enabled``` variable to true/false. 

```js
var JSEH_enabled = false; //in blade.php =@if(env('JS_ERROR_ALERTER_ENABLED', false)) true @else false @endif ;
```

### simple test

```html
<script>
test_undefined_variable
</script>

<script>
$(function() {
	test_jquery_undefined_variable
});
</script>
```

## Contribute

This package is (yet) under development and refactoring but is ready for
production. Please, feel free to comment, contribute and help. I will be happy
to get some help to deliver tests.

## License

JS/jQuery error alerter is licensed under [The MIT License (MIT)](LICENSE).

(c) 2016 Oleksii Prudkyi <Oleksii.Prudkyi@gmail.com>
