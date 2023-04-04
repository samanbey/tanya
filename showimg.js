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
