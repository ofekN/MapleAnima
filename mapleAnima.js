export default class MapleAnima{
    constructor(){

        // MapleWP Transition Libary 
        // maple-wp.com
    
    }
    to(obj,opt){
        if(opt.y ===  undefined) opt.y = 0
        if(opt.x ===  undefined) opt.x = 0
        if(opt.rotate ===  undefined) opt.rotate = 0
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

        setTimeout(() => {
            
        obj.style.transition = `${opt.duration}s ${opt.ease}`
        obj.style.transform = `translate(${opt.x}%,${opt.y}%)scale(${opt.scale})rotate(${opt.rotate}deg)`
        obj.style.color = opt.color
        obj.style.fontSize = opt.fontSize
        obj.style.fontWeight = opt.fontWeight
        obj.style.border = opt.border
        obj.style.opacity = opt.opacity
        obj.style.display = opt.display

        }, opt.delay * 1000);
     
    }

    
    fromTo(obj,opt,opt0){
        if(opt.y ===  undefined) opt.y = 0
        if(opt0.y === undefined) opt0.y = 0
        if(opt.x ===  undefined) opt.x = 0
        if(opt0.x === undefined) opt0.x = 0
        if(opt.rotate ===  undefined) opt.rotate = 0
        if(opt0.rotate === undefined) opt0.rotate = 0
        if(opt.scale ===  undefined) opt.scale = 1
        if(opt0.scale === undefined) opt0.scale = 1
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

        obj.style.transition = `${opt.duration}s ${opt.ease}`
        obj.style.transform = `translate(${opt.x}%,${opt.y}%)scale(${opt.scale})rotate(${opt.rotate}deg)`
        obj.style.color = opt.color
        obj.style.backgroundColor = opt.backgroundColor
        obj.style.fontSize = opt.fontSize
        obj.style.fontWeight = opt.fontWeight
        obj.style.border = opt.border

        


        setTimeout(() => {
            obj.style.transform = `translate(${opt0.x}%,${opt0.y}%)scale(${opt0.scale})rotate(${opt0.rotate}deg)`
            obj.style.color = opt0.color
            obj.style.backgroundColor = opt0.backgroundColor
            obj.style.fontSize = opt0.fontSize
            obj.style.fontWeight = opt0.fontWeight
            obj.style.border = opt0.border

        }, opt.duration * 1000);
    }
    
}

