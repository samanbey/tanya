---
title: "Gede-tanya"
---
# Gede-tanya
![A tanyaház képe](/img/tanya.jpg)
Van egy tanyánk Kaposvár közelében, a Zselicben. 
Erősen el van hanyagolva, de elhatároztuk, hogy szépen lassan rendbe tesszük.

Itt igyekszem dokumentálni, hogy mikor mit csináltunk.

## Blog
{% for post in site.posts %}
 - [{{ post.title }}](/tanya{{ post.url }})
{% endfor %}

