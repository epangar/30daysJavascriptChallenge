

function valueKey(pressedKey){
    
    var value=pressedKey.keyCode
    console.log(value)
    return value
}

function clickKey(){

}

(function drums(){
    
    document.addEventListener('keyup', valueKey)
    
    
})()