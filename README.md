# MapleAnima
Small JS Transition libary base on css transition property, you can animate any html element you wish to.









# Code Example

// regular import from jsdelivr cdn
import MapleAnima from 'https://cdn.jsdelivr.net/gh/ofekN/MapleAnima/mapleAnima.js'


let maple = new MapleAnima()

let box = document.querySelector('.box')

maple.to(box,{duration:2,y:100,x:60)

maple.to(box,{duration:2,y:0,x:0,delay:2})


# Functions

to(element,{duration:2,rotate:40})<br>
fromTo(element,{duration:2,rotate:40},{rotate:80})<br>
scrollTo(element,{duration:2,rotate:40},{rotate:80})<br>

// inner functions

onComplete,onStart,onLeave


<h1>onScroll Transitions</h1>


![Alt Text](https://media.giphy.com/media/iYjeH7Z3OyY5EKBqBV/giphy.gif)


# Examples Links

<a href="https://codepen.io/OfekNakar/pen/Vwrorxy?editors=1011" target="_blank" >onScroll transition example</a>




