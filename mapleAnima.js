export default class MapleAnima{
    constructor(){

        // MapleWP Transition Libary 
        // maple-wp.com
    
    }

    scrollTo(obj,opt){
          window.addEventListener('scroll',()=>{
              let objPosY = opt.scrollElement.getBoundingClientRect()
              if(opt.y ===  undefined) opt.y = 0
              if(opt.x ===  undefined) opt.x = 0
              if(opt.z ===  undefined) opt.z = 0
              if(opt.rotate ===  undefined) opt.rotate = 0
              if(opt.rotateX ===  undefined) opt.rotateX = 0
              if(opt.rotateY ===  undefined) opt.rotateY = 0
              if(opt.rotateZ ===  undefined) opt.rotateZ = 0
              if(opt.skewX ===  undefined) opt.skewX = 0
              if(opt.skewY ===  undefined) opt.skewY = 0
              if(opt.scale ===  undefined) opt.scale = 1
              if(opt.color === undefined) opt.color = obj.style.color
              if(opt.backgroundColor === undefined) opt.backgroundColor = obj.style.backgroundColor
              if(opt.fontWeight === undefined) opt.fontWeight = obj.style.fontWeight
              if(opt.fontSize === undefined) opt.fontSize = obj.style.fontSize
              if(opt.border === undefined) opt.border = obj.style.border
              if(opt.delay === undefined) opt.delay = 0
              if(opt.opacity === undefined) opt.opacity = obj.style.opacity
              if(opt.display === undefined) opt.display = opt.display
              if(opt.ease === undefined) opt.ease = 'linear'
              if(opt.repeat === undefined) opt.repeat = 0
              if(opt.scrollStart === undefined) opt.scrollStart = 150


           

             if(objPosY.top < opt.scrollStart) {
                 animation()
             }
             else{
              if(opt.onLeave !== undefined) opt.onLeave()
              }

             function animation(){
                 
        setTimeout(() => {
            obj.style.transition = `${opt.duration}s ${opt.ease}`
            obj.style.perspective = '100%'
            obj.style.transform = `translate3d(${opt.x}%,${opt.y}%,${opt.z})scale(${opt.scale})rotate(${opt.rotate}deg)rotateX(${opt.rotateX}deg)rotateY(${opt.rotateY}deg)rotateZ(${opt.rotateZ}deg)skew(${opt.skewX}deg,${opt.skewY}deg)`
            obj.style.color = opt.color
            obj.style.fontSize = opt.fontSize
            obj.style.fontWeight = opt.fontWeight
            obj.style.backgroundColor = opt.backgroundColor
            obj.style.border = opt.border
            obj.style.opacity = opt.opacity
            obj.style.display = opt.display
    
            if(opt.onStart !== undefined) {opt.onStart() }
    
             if(opt.onComplete !== undefined) {
                 setTimeout(() => {
                     opt.onComplete()
                 }, opt.duration * 1000);
             }
    
    
    
    
            }, opt.delay * 1000);
         
             }

          })
    }

    to(obj,opt){
        if(opt.y ===  undefined) opt.y = 0
        if(opt.x ===  undefined) opt.x = 0
        if(opt.z ===  undefined) opt.z = 0
        if(opt.rotate ===  undefined) opt.rotate = 0
        if(opt.rotateX ===  undefined) opt.rotateX = 0
        if(opt.rotateY ===  undefined) opt.rotateY = 0
        if(opt.rotateZ ===  undefined) opt.rotateZ = 0
        if(opt.skewX ===  undefined) opt.skewX = 0
        if(opt.skewY ===  undefined) opt.skewY = 0
        if(opt.scale ===  undefined) opt.scale = 1    
        if(opt.color === undefined) opt.color = obj.style.color
        if(opt.backgroundColor === undefined) opt.backgroundColor = obj.style.backgroundColor
        if(opt.fontWeight === undefined) opt.fontWeight = obj.style.fontWeight
        if(opt.fontSize === undefined) opt.fontSize = obj.style.fontSize
        if(opt.border === undefined) opt.border = obj.style.border
        if(opt.delay === undefined) opt.delay = 0
        if(opt.opacity === undefined) opt.opacity = obj.style.opacity
        if(opt.display === undefined) opt.display = opt.display
        if(opt.ease === undefined) opt.ease = 'linear'
        if(opt.repeat === undefined) opt.repeat = 0

       



        setTimeout(() => {
        obj.style.transition = `${opt.duration}s ${opt.ease}`
        obj.style.perspective = '100%'
        obj.style.transform = `translate3d(${opt.x}%,${opt.y}%,${opt.z})scale(${opt.scale})rotate(${opt.rotate}deg)rotateX(${opt.rotateX}deg)rotateY(${opt.rotateY}deg)rotateZ(${opt.rotateZ}deg)skew(${opt.skewX}deg,${opt.skewY}deg)`
        obj.style.color = opt.color
        obj.style.fontSize = opt.fontSize
        obj.style.fontWeight = opt.fontWeight
        obj.style.border = opt.border
        obj.style.opacity = opt.opacity
        obj.style.display = opt.display
        obj.style.backgroundColor = opt.backgroundColor

        if(opt.onStart !== undefined) {opt.onStart() }

         if(opt.onComplete !== undefined) {
             setTimeout(() => {
                 opt.onComplete()
             }, opt.duration * 1000);
         }




        }, opt.delay * 1000);
     
    }

    
    fromTo(obj,opt,opt0){
        if(opt.y ===  undefined) opt.y = 0
        if(opt0.y ===  undefined) opt0.y = 0
        if(opt.x ===  undefined) opt.x = 0
        if(opt0.x ===  undefined) opt0.x = 0
        if(opt.z ===  undefined) opt.z = 0
        if(opt0.z ===  undefined) opt0.z = 0
        if(opt.rotate ===  undefined) opt.rotate = 0
        if(opt0.rotate ===  undefined) opt0.rotate = 0
        if(opt.rotateX ===  undefined) opt.rotateX = 0
        if(opt0.rotateX ===  undefined) opt0.rotateX = 0
        if(opt.rotateY ===  undefined) opt.rotateY = 0
        if(opt0.rotateY ===  undefined) opt0.rotateY = 0
        if(opt.rotateZ ===  undefined) opt.rotateZ = 0
        if(opt0.rotateZ ===  undefined) opt0.rotateZ = 0
        if(opt.skewX ===  undefined) opt.skewX = 0
        if(opt0.skewX ===  undefined) opt0.skewX = 0
        if(opt.skewY ===  undefined) opt.skewY = 0
        if(opt0.skewY ===  undefined) opt0.skewY = 0
        if(opt.scale ===  undefined) opt.scale = 1  
        if(opt0.scale ===  undefined) opt0.scale = 1  


        if(opt.color === undefined) opt.color = obj.style.color
        if(opt0.color === undefined) opt0.color = obj.style.color
        if(opt.backgroundColor === undefined) opt.backgroundColor = obj.style.backgroundColor
        if(opt0.backgroundColor === undefined) opt0.backgroundColor = obj.style.backgroundColor
        if(opt.fontWeight === undefined) opt.fontWeight = obj.style.fontWeight
        if(opt.fontSize === undefined) opt.fontSize = obj.style.fontSize
        if(opt.border === undefined) opt.border = obj.style.border
        if(opt0.fontWeight === undefined) opt0.fontWeight = obj.style.fontWeight
        if(opt0.fontSize === undefined) opt0.fontSize = obj.style.fontSize
        if(opt0.border === undefined) opt0.border = obj.style.border
        if(opt.ease === undefined) opt.ease = 'linear'

        obj.style.transition = `${opt.duration / 2}s ${opt.ease}`
        obj.style.perspective = '100%'
        obj.style.transform = `translate3d(${opt.x}%,${opt.y}%,${opt.z})scale(${opt.scale})rotate(${opt.rotate}deg)rotateX(${opt.rotateX}deg)rotateY(${opt.rotateY}deg)rotateZ(${opt.rotateZ}deg)skew(${opt.skewX}deg,${opt.skewY}deg)`
        obj.style.color = opt.color
        obj.style.backgroundColor = opt.backgroundColor
        obj.style.fontSize = opt.fontSize
        obj.style.fontWeight = opt.fontWeight
        obj.style.border = opt.border

        


        setTimeout(() => {
            obj.style.transform = `translate3d(${opt0.x}%,${opt0.y}%,${opt0.z})scale(${opt0.scale})rotate(${opt0.rotate}deg)rotateX(${opt0.rotateX}deg)rotateY(${opt0.rotateY}deg)rotateZ(${opt0.rotateZ}deg)skew(${opt0.skewX}deg,${opt0.skewY}deg)`
            obj.style.color = opt0.color
            obj.style.backgroundColor = opt0.backgroundColor
            obj.style.fontSize = opt0.fontSize
            obj.style.fontWeight = opt0.fontWeight
            obj.style.border = opt0.border

        if(opt.onStart !== undefined) {opt.onStart() }
        
         if(opt.onComplete !== undefined) {
             setTimeout(() => {
                 opt.onComplete()
             }, opt.duration * 1000);
         }


        }, opt.duration * 500);
    }
    
}



