'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const sWidth = spider.offsetWidth;
const sHeigth = spider.offsetWidth;
const wWidth = wall.offsetWidth;
const wHeigth = wall.offsetWidth;
const x = (wWidth - sWidth) / 2;
const y = (wHeigth - sHeigth) / 2;

spider.style.left = x + 'px';
spider.style.top = y + 'px';
