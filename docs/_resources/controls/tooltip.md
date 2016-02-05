---
title: Tooltip
layout: resource
---

### Example

<input type="text" id="tooltip-example" />

{% capture code %}
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {

		var example = document.getElementById('tooltip-example');
		new ToolTip('Hello World', example);
	});
{% endcapture %}

{% include examples/javascript.html code=code %}

### Hover Example

<input type="text" id="hover-tooltip-example" />

{% capture code %}
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {
		var example = document.getElementById('hover-tooltip-example');

		example.addEventListener('mouseover', function () {
			this.tooltip = new ToolTip('Hello World', example);
		}.bind(this));

		example.addEventListener('mouseout', function () {
			this.tooltip.remove();
		}.bind(this));
	});
{% endcapture %}
{% include examples/javascript.html code=code %}

### Clickable Link

<input type="text" id="clickable-tooltip-example" />

<script type="text/javascript">
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {
		var example = document.getElementById('clickable-tooltip-example');

		example.addEventListener('mouseover', function () {
			if (!this.tooltip) {
				this.tooltip = new ToolTip('Hello <a href="http://google.com">Google</a>', example);
			}
		}.bind(this));

		example.addEventListener('mouseout', function (e) {

			if (e.toElement !== this.tooltip.getToolTip()) {
				this.tooltip = this.tooltip.remove();

			} else {
				this.tooltip.getToolTip().addEventListener('mouseout', function (e) {
					if (e.toElement !== example && !this.tooltip.isDescendant(e.toElement)) {
						this.tooltip = this.tooltip.remove();
					}
				}.bind(this));
			}
			
		}.bind(this));
	});
</script>