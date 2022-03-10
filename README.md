# MapleAnima
Small CSS&amp;JS Transition Libary







-- example

import MapleAnima from 'https://cdn.jsdelivr.net/gh/ofekN/MapleAnima/mapleAnima.js'

let maple = new MapleAnima()

let box = document.querySelector('.box')
let h = document.querySelector('h1')
maple.to(h,{duration:2,y:100,x:60,color:'blue',fontSize:'50px'})
maple.to(h,{duration:2,y:0,x:0,color:'red',delay:2})
maple.to(h,{duration:2,y:100,x:60,color:'blue',fontSize:'30px',delay:4})
maple.to(h,{duration:2,y:0,x:0,color:'red',delay:6})


document.addEventListener('click',()=>{
    maple.fromTo(box,{ease:'ease-out',duration:2,y:100,x:60,scale:1.5,rotate:45,backgroundColor:'red'},{backgroundColor:'green',rotate:0,x:0,y:0,scale:1})

})
