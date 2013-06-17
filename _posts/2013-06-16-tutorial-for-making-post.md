---
layout: post
title: "Tutorial for Making Post"
description: "A simple way of making post for jekyll"
category: "Tutorial"
tags: ["Jekyll"]
---
{% include JB/setup %}

<p>
    This blog is actually being powered by <a tooltip="Click here to check out what Jekyll is" href="http://jekyllrb.com/">Jekyll</a>, and you can write post using either <a tooltip="Click here to check out the syntax for markdown" href="http://daringfireball.net/projects/markdown/">MarkDown language</a> or writing it as <a tooltip="HTML as what you learn in CS 320!">HTML</a> it is.
</p>

<h3>So, how do we make a post?</h3>

<p>
    Most important of all, you have to make a <a tooltip="for markdown file" href="">.md</a> file in the following format under the folder <code>_post\</code>
</p>
<code>
    [year]-[month]-[day]-[Title of the post].md
</code>

<p>
    After that, you will have to understand what a post is and where it is goint to be, so you can customize post in your own way!
</p>
<p>
    So what a post is and what components do we have to write?
</p>
<p>
    Post is contained of two major components
</p>
<ol>
    <li> The post variables </li>
    <li> The post content </li>
</ol>
<h5> Post Variables </h5>
<p>
    Where the post variables are the one that get surrounded by <a tooltip="This is important divider!" href="">"---"</a> as a divider. <br>
    And within the divider, we can define all sort of variable that other page can use and as well and which layout we want to choose(for simplicity, just use post for now since that is only one I defined so far).
</p>
<h5> Post Content </h5>
<p>
    As post content, you can think of it as a individual html page where you are going to include in the layout. <br>
    For example, whatever I wrote after the dividor will be showing up in the post as how I write.
</p>
<pre>
    Side note: if you want to check where this is defined, you can take a look over \_layouts\post.html
    Site note 2: Some of the template is actually defined in liquid syntax, so if you dont understand, dont worry about it, just think of it like how JSP page works with template.
</pre>
<h5> Extra fun, decorations </h5>
<p>
    If you noticed from my post, there are some tooltip popping up on links, you can also add it to your post easily just add a <code>tooltip="[Tooltip content]"</code> into your <b>Attribute</b> of the element. <br>
    That is actually coming from the <a tooltip="This is cool simple library to use!" href="http://angular-ui.github.io/bootstrap/">angularJS UI bootstrap</a> library in the page, so if you want to decorate your post, you are free to use it
</p>