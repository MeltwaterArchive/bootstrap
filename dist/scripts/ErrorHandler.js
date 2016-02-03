define([], function () {
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
		return this;
	};

	ErrorView.prototype.tooltip =  function (element, position) {
		
		var directions = ['auto', 'top', 'bottom', 'left', 'right'],
			offsets = element.getBoundingClientRect();
		
		if (directions.indexOf(position) !== -1) {
			throw 'Position is not valid, please choose either auto, top, bottom, left or right';
		}

		// create the element
		this.tooltip = document.createElement('div');
		this.tooltip.classList.add('error-tooltip');
		// populate the content
		this.tooltip.innerHTML = 
			'<div class="close"></div><div class="message">' + 
			this.message + '</div>';

		// position the element relative to the other element
		this.tooltip.style.position.left = offsets.left;
		this.tooltip.style.position.top = offsets.top;

		document.body.appendChild(this.tooltip);

		return this;
	};

	ErrorView.prototype.remove = function () {
		this.tooltip.parentNode.removeChild(this.tooltip);
	};

});