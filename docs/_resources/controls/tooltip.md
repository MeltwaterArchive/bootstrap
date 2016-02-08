---
title: Tooltip
---

The tooltip control enables tooltips to be displayed on elements. The tooltip
will be positioned relative to the element and can accept any HTML based string.

| Name | Type | Description |
|------|------|-------------|
| Message | `string` | The message to display in the tooltip |
| Element | `DOMElement` | Element to attach the tooltip to |
| Options | `object` | See options |

### Options

| Name | Type | Description |
|------|------|-------------|
| position | `string` | One of the following; top, bottom, left and right |
| className | `array` | Additional css class names for the tooltip |

### Basic Example

In this example we set the position to `bottom` which will cause the element to
be rendered below the element.

<input type="text" id="tooltip-example" />

{% capture code %}
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {
		// pointer to the element
		var example = document.getElementById('tooltip-example');
		
		// load up the tooltip
		new ToolTip('Hello World', example, {
			'position':'bottom'
		});
	});
{% endcapture %}

{% include examples/javascript.html code=code %}

### Hover Example

The most common usercase for a tooltip is to show the tooltip on hover. In
example we are attaching an event listener to add and remove the tooltip. Notice
how we are assigning the tooltip to `this` so we can remove it at a later date.

<input type="text" id="hover-tooltip-example" />

{% capture code %}
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {
		// pointer to the element
		var example = document.getElementById('hover-tooltip-example');
		
		// add the mouseover event
		example.addEventListener('mouseover', function () {
			// create the tooltip
			this.tooltip = new ToolTip('Hello World', example, {
				'position': 'left'
			});
		}.bind(this));
		
		// when we leave the element remove the tooltip
		example.addEventListener('mouseout', function () {
			this.tooltip.remove();
		}.bind(this));
	});
{% endcapture %}
{% include examples/javascript.html code=code %}

### Actionable Content

A slightly more indepth example involves using the tooltip with a content block
which contains a link. This requires the tooltip to be able to stay when we 
mouse out of the element and into the tooltip.

<input type="text" id="clickable-tooltip-example" />

{% capture code %}
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {
		// pointer to the element
		var example = document.getElementById('clickable-tooltip-example');
		
		// add the mouseover event
		example.addEventListener('mouseover', function () {
			if (!this.tooltip) {
				// we have a link in this tooltip
				this.tooltip = new ToolTip('Hello <a href="http://google.com">Google</a>', example);
			}
		}.bind(this));
		
		// when we leave the element remove the tooltip
		example.addEventListener('mouseout', function (e) {
			if (e.toElement !== this.tooltip.getToolTip()) {
				this.tooltip = this.tooltip.remove();
			} else {
				
				// add a special case for when we leave the element but move into
				// the tooltip
				this.tooltip.getToolTip().addEventListener('mouseout', function (e) {
					
					// using the isDescendant function to determine whether the element 
					// is a child of the tooltip
					if (e.toElement !== example && !this.tooltip.isDescendant(e.toElement)) {
						this.tooltip = this.tooltip.remove();
					}
				}.bind(this));
			}
		}.bind(this));
	});
{% endcapture %}
{% include examples/javascript.html code=code %}

### Tooltips as Errors

Please see the error documentation for more information in using tooltips as 
error messages. Typically this can be achieved by adding the css class `error`
to the tooltip class list.

<input type="text" id="tooltip-example-error" />

{% capture code %}
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {
		// pointer to the element
		var example = document.getElementById('tooltip-example-error');
		// load up the tooltip
		new ToolTip('An Error', example, {
			'position':'right',
			'classNames': ['error']
		});
	});
{% endcapture %}

{% include examples/javascript.html code=code %}

