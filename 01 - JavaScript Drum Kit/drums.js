
function valueKey(pressedKey){
    
    var value=pressedKey.keyCode
    console.log(value)
    return value
}

function clickKey(){

}

(function drums(){
    
    var sounds = {
        
    }
    document.addEventListener('keyup', valueKey)
    var sound= new Audio( "./sounds/boom.wav");
    console.log(sound)
    
})()