'use strict';

const hamburger = document.querySelector('.menu>.fas');
console.dir(hamburger);

const menu = document.querySelector('.menu>ul');
console.dir(menu);

hamburger.addEventListener('click', function(event){
    hamburger.classList.toggle('active');
    menu.classList.toggle('expanded');
});