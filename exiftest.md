---
title: "Gede-tanya"
---
## debug
{% for image in site.static_files %}{% if image.path contains 'img/' %}<a href="{{ site.baseurl }}{{ image.path }}">na</a> {% endif %}{% endfor %}
