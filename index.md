---
title: "Gede-tanya"
---
# Gede-tanya
![A tanyaház képe](/img/tanya.jpg)
Van egy tanyánk Kaposvár közelében, a Zselicben. 

Ami nincs:
- villany
- víz

Cserébe ami van:
- csillagos ég, Tejút
- vadvilág
- csend, nyugalom

## Blog
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
