let text = document.getElementById('text');
let cloudl = document.getElementById('cloudl');
let cloudr= document.getElementById('cloudr');
let mountain = document.getElementById('mountain');
let grass = document.getElementById('grass');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

    window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    cloudl.style.top = value * -2 + 'px';
    cloudl.style.left = value * -10 + 'px';
    cloudr.style.top = value * -2 + 'px';
    cloudr.style.left = value * 10 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    grass.style.top = value * -0.12 + 'px';
    mountain.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5  + 'px';
    });