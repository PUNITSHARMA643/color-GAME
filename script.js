// const a = document.getElementsByid('box');
// a.style.backgroundColor = 'red';
// a.style.backgroundColor = 'blue';
const body = document.getElementsByTagName('body');

const a = document.getElementsByClassName('boxa');
a[0].style.backgroundColor = 'green';
a[0].addEventListener('click', function(){
    body[0].style.backgroundColor = 'green';
});



const b = document.getElementsByClassName('boxb');
b[0].style.backgroundColor = 'red';
b[0].addEventListener('click', function(){
    body[0].style.backgroundColor = 'red';
});


const c = document.getElementsByClassName('boxc');
c[0].style.backgroundColor = 'blue';
c[0].addEventListener('click', function(){
    body[0].style.backgroundColor = 'blue';
});

const d = document.getElementsByClassName('boxd');
d[0].style.backgroundColor = 'yellow';
d[0].addEventListener('click', function(){ 
    body[0].style.backgroundColor = 'yellow';
});


const text = document.getElementsByClassName('text');
text[0].style.color = 'white';
text[0].addEventListener('click', function(){
    body[0].style.backgroundColor = 'white';
});