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

## 3D modell
- [Egy kezdetleges modell KMZ-ben](/3d/Tanya.kmz)

## Megközelítés
Töröcske, forduló buszmegállótól a piros sáv jelzésen kb. 1,35 km

## Térkép

<iframe src="map"></iframe>

## Képek
{% for image in site.static_files %}
{% if image.path contains 'img/' %}
 - [{{image.name}}]({{ site.baseurl }}{{ image.path }})
{% endif %}
{% endfor %}

### debug
{% for image in site.static_files %}
{% if image.path contains 'img/' %}
<a href="{{ site.baseurl }}{{ image.path }}"><img src="https://images.weserv.nl/?url={{ site.url }}{{ site.baseurl }}{{ image.path }}&w=256&h=256&output=jpg&q=50" /></a> 
{% endif %}
{% endfor %}

{{ site.url }}
{{ site.baseurl }}
