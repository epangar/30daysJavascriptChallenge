

function valueKey(pressedKey){
    
    var value=document.getElementsByClassName("key")
    
    return pressedKey.keyCode
}

function clickKey(){

}

(function drums(){
    
    document.addEventListener('keyup', valueKey)
    debugger
    
})()