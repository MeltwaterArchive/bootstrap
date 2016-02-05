---
title: Including the JavaScript controls in your project
---

All the JS controls are built using (RequireJS)[] you can include the AMD
compatible controls using the following method.

## Step 1: Install via Bower

DataSift bootstrap is a public respository, however we don't publically list it
in Bower. To include DataSift Bootstrap run the following command.

`bower install git@github.com:datasift/bootstrap.git --save`

## Step 2: Create a link via path directory

In your RequireJS config file you can create a shortcut to the path.

{% highlight javascript %}
requirejs.config({
	paths: {
		'bootstrap': '<bower-install-directory>/datasift-bootstrap/dist/scripts'
	}
}
});
{% endhighlight %}

Please remember to replace `<bower-install-directory>` with the directory where
bower installs the repository.

## Step 3: Require in the define call

Now we have a shortcut to the file we can easily require the controls.

{% highlight javascript %}
define([
	'bootstrap/ToolTip'
], function (ToolTip) {
	...
});
{% endhighlight %}