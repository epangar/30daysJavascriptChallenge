let detectPressed = (pressedKey) =>{
  
  let value = pressedKey.key;
  
  if(value==='Shift'){
    
  }
  
}

let detectHold =(pressedKey)=>{
  debugger
  console.log(`${pressedKey} is hold.`);
}

window.onload = (()=>{
  var checkbox = document.querySelectorAll('.inbox input')
  console.log(checkbox)
})

window.addEventListener('keydown', detectPressed);
window.addEventListener('keydown', (event)=> event.repeat ? detectHold : "");