# MapleAnima
Small CSS&amp;JS Transition Libary







-- example

import MapleAnima from 'https://cdn.jsdelivr.net/gh/ofekN/MapleAnima/mapleAnima.js'

let maple = new MapleAnima()

let box = document.querySelector('.box')

maple.to(box,{duration:2,y:100,x:60)

maple.to(box,{duration:2,y:0,x:0,delay:2})

maple.to(box,{duration:2,y:100,x:60,delay:4})


