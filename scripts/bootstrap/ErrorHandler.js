define([
	'./ToolTip'
], function (Tooltip) {
	'use strict';

	/**
	 * Error Handler
	 *
	 * Create a new error message.
	 *
	 * ##Usage
	 *
	 * new ErrorView('Your password is incorrect').tooltip(<)
	 * 
	 * @param {[type]} message [description]
	 */
	var ErrorView = function (message) {
		this.message = message;
	};

	ErrorView.prototype.tooltip =  function (element, position) {
		
		this.tooltip = new ToolTip(this.message, element, {
			'position': position,
			'className': 'error'
		});

		return this;
	};

	ErrorView.prototype.remove = function () {
		if (this.tooltip) {
			this.tooltip.remove();
		}
		return null;		
	};

	return ErrorView;

});

