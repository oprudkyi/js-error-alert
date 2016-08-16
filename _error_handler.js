/*
 * This file is part of js error alerter - tool to simplify catching of javascript errors
 *
 * Main error handler, helps to popup errors earlier
 * place it atop of page as possible, or even embed it into page
 *
 * MIT licensed
 * (c) 2016 Oleksii Prudkyi <Oleksii.Prudkyi@gmail.com>
 */


// you should have this function defined atop of your page or first js file
if(typeof showUncaughtException === "undefined") {
	var showUncaughtException = function (message) {
		"use strict";

		if(typeof message === "undefined") {
			return false;
		}
		alert(message);
	};
	window.showUncaughtException = showUncaughtException;
}

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
	"use strict";

	if(typeof errorMsg == "undefined") {
		return false;
	}

	showUncaughtException("JS Error : " + errorMsg + "\n" +
		"line number : " + lineNumber + "\n" +
		"column : " + column + "\n" +
		"object : " + errorObj
		);
        
    // Tell browser to run its own error handler as well   
    return false;
};
