---
layout: default
title: Typography
headings:
    - Fonts
    - Headings
---

#Typography

## Font
We use [Google's Open Sans](https://www.google.com/fonts/specimen/Open+Sans) as our default font. You can run this on your site using Google Fonts. We recommend the `link` script below to add Open Sans to your project.

{% highlight html %}
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,700' rel='stylesheet' type='text/css'>
{% endhighlight %}

## Headings
DataSift Bootstrap supports the headings h1 through to h6 as both tags and classes.

{% capture code %}
<ul>
    <li class="h1">Heading 1</li>
    <li class="h2">Heading 2</li>
    <li class="h3">Heading 3</li>
    <li class="h4">Heading 4</li>
    <li class="h5">Heading 5</li>
    <li class="h6">Heading 6</li>
</ul>
{% endcapture %}

{% include examples/html.html code=code %}

## something else
