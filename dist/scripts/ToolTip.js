define([], function() {
    'use strict';


    /**
     * Tooltip
     *
     * ##Options
     *
     * - positon, one of auto, top, bottom, left and right
     * - className, additional class names of the tooltip
     *
     * 
     * @param {[type]} content [description]
     * @param {[type]} element [description]
     * @param {[type]} options [description]
     */
    var Tooltip = function (content, element, options) {

        var directions = ['auto', 'top', 'bottom', 'left', 'right'];

        this.content = content;
        this.element = element;
        this.options = options;

        this.options.position = this.options.position || 'top';

        // check to make sure the position is valid
        if (directions.indexOf(this.options.position) === -1) {
            throw 'Position is not valid, please choose either auto, top, bottom, left or right';
        }

        // check for the auto position
        if (this.options.position === 'auto') {
            throw 'Auto is not yet implemented';
        }

        // do everything
        this._render()._position();
    };

    Tooltip.prototype._render = function () {
        // create the element
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip', position, this.options.className);
        // populate the content
        this.tooltip.innerHTML = 
            '<div class="close"></div><div class="message">' + 
            this.message + '</div>';

        // need to append the item to calculate the height
        document.body.appendChild(this.tooltip);

        return this;
    };

    Tooltip.prototype._position = function () {

        var bodyRect = document.body.getBoundingClientRect(),
            elementRect = this.element.getBoundingClientRect(),
            offsetTop = elementRect.top - bodyRect.top,
            offsetLeft = elementRect.left - bodyRect.left;

        // adjust the position depending on where we want it
        switch(this.options.position) {
            case 'top':
                offsetTop -= this.tooltip.offsetHeight + 6;
                break;
            case 'left':
                offsetLeft -= this.tooltip.offsetWidth + 6;
                break;
            case 'right':
                offsetLeft += this.element.offsetWidth - 6;
                break;
            case 'bottom':
                offsetTop += this.element.offsetHeight - 6;
                break;

        }
        // apply to the tooltip
        this.tooltip.style.left = offsetLeft + 'px';
        this.tooltip.style.top = offsetTop + 'px';

        return this;
    };

    return Tooltip;
});
