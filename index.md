---
layout: page
title: Fish 4 Games
tagline: Supporting tagline
---
{% include JB/setup %}

## Announcements

Welcome to Fish 4 Entertainments, current developed games:

    * [Atlantis Warfares](https://mega.co.nz/#!WhBHEBLC!H_6OkxCyX57_aJEAHfznKAeQsvBurIC4hM9zb3gp2iU)

Source code will be included into Fish 4/ repositories :soon:  

## Post Lists:

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

    Develope a Horror game with mechanics of blinking