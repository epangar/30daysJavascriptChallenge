let detectPressed = (pressedKey) =>{
  
  let value = pressedKey.key;
  
  if(value==='Shift'){
    detectHold(value);
  }
  
}

let detectHold =(pressedKey)=>{
  debugger
  console.log(`${pressedKey} is hold.`);
}

let isChecked = (element) => element.checked;

window.onload = (()=>{
  var checkbox = document.querySelectorAll('.inbox input')
  console.log(checkbox)

})

window.addEventListener('keydown', detectPressed);
window.addEventListener('keydown', (event)=> event.repeat ? detectHold : "");