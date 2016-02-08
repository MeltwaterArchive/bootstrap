---
title: Error Handler
---

The Error Handler control will handle a variety of different errors. It will support form and generic errors.
It does this via extending the other elements in DataSift Bootstrap with their correct error stylings.

| Name | Type | Description |
|------|------|-------------|
| Message | `string` | The message to display in the tooltip |
| Position | `string` | See [tooltip](#tooltip) |

### Form Errors

When the validation fails on an input the following error message should
be shown.

<input type="text" id="error-example" />

{% capture code %}
	require([
		'bootstrap/ToolTip'
	], function (ToolTip) {
		// pointer to the element
		var example = document.getElementById('error-example');
		// load up the tooltip
		new ToolTip('An Error', example, {
			'position':'right',
			'classNames': ['error']
		});
	});
{% endcapture %}

{% include examples/javascript.html code=code %}