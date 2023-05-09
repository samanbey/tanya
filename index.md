---
title: "Gede-tanya"
---
![A tanyaház képe](/img/20210502_tanya.jpg)
Van egy tanyánk Kaposvár közelében, a Zselicben. 
Erősen el van hanyagolva, de elhatároztuk, hogy szépen lassan rendbe tesszük.

Itt igyekszem dokumentálni, hogy mikor mit csináltunk.

## Blog
{% for post in site.posts %}
 - [{{ post.title }}](/tanya{{ post.url }})
{% endfor %}

## Megközelítés
Töröcske, forduló buszmegállótól a piros sáv jelzésen kb. 1,35 km. Az út a Zselic egyik leglátványosabb [horhóján](/img/20211224_horho.jpg) (löszmélyútján) át vezet.

## Térkép
<iframe src="map" style="width: 100%"></iframe>

## Képek
<style> 
img.tanyathumb { width: 19%; cursor: pointer; }
.imdisplay { top:0; bottom:0; left:0; right:0; outline: none; position: fixed; background-color: rgba(0,0,0,0.6); background-size: contain; background-repeat: no-repeat; background-position: center; display: none; }
.imdisplay span { position: absolute; top: 50%; transform: translate(0,-50%); font-size: 20mm; font-family: sans; color: white; cursor:pointer; }
.imdisplay span:hover { color: red; }
.prevbutton { left: 10%; } .nextbutton { right: 10%; }
</style>
<div class="imdisplay" tabindex="0" onclick="this.style.display=''"><span class="prevbutton" onclick="showprev()">◄</span><span class="nextbutton" onclick="shownext()">►</span></div>
<script>
function showimg(url) {
    var fader=document.querySelector('.imdisplay');
    fader.current=event.target;
    fader.style.backgroundImage='url('+url+')';
    fader.onkeydown=function(e) {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case 27: fader.style.display=''; break;
            case 37: showprev(); break;
            case 39: shownext(); break;
        }
    }
    fader.style.display='block';
    fader.focus();
}
function shownext() {
    var fader=document.querySelector('.imdisplay');
    if (fader.current.nextElementSibling) {
        fader.current.nextElementSibling.click();
        event.stopPropagation();
    }
}
function showprev() {
    var fader=document.querySelector('.imdisplay');
    if (fader.current.previousElementSibling) {
        fader.current.previousElementSibling.click();
        event.stopPropagation();
    }
}
</script>
<div>{% for image in site.static_files reversed %}{% if image.path contains 'img/' %}<img class="tanyathumb" src="https://images.weserv.nl/?url={{ site.url }}{{ site.baseurl }}{{ image.path }}&w=256&h=256&output=jpg&q=50" onclick="showimg('{{ site.baseurl }}{{ image.path }}')" /> {% endif %}{% endfor %}</div>
## 3D modell
- [Egy kezdetleges modell KMZ-ben](/3d/Tanya.kmz)


