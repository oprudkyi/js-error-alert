/*
 * This file is part of js error alerter - tool to simplify catching of javascript errors
 * https://github.com/oprudkyi/js-error-alert
 *
 * Main error handler, helps to popup errors earlier
 * place it atop of page as possible, or even embed it into page
 *
 * MIT licensed
 * (c) 2016 Oleksii Prudkyi <Oleksii.Prudkyi@gmail.com>
 */

if(typeof window.JSEH_enabled === "undefined") {
	window.JSEH_enabled = true;
}

// you should have this function defined atop of your page or first js file
// or default one will be applied
if(window.JSEH_enabled && typeof window.JSEH_showUncaughtException === "undefined") {
	var JSEH_showUncaughtException = function (message) {
		"use strict";

		if(typeof message === "undefined") {
			return false;
		}
		alert(message);
	};
	window.JSEH_showUncaughtException = JSEH_showUncaughtException;
}

if(window.JSEH_enabled) {
window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
	"use strict";

	if(typeof errorMsg == "undefined") {
		return false;
	}

	window.JSEH_showUncaughtException("JS Error : " + errorMsg + "\n" +
		"line number : " + lineNumber + "\n" +
		"column : " + column + "\n" +
		"object : " + errorObj
		);
		
	// Tell browser to run its own error handler as well   
	return false;
};
}
