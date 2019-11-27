let detectPressed = (pressedKey) =>{
  
  let value = pressedKey.key;
  console.log(value);

  if(value==='Shift'){
    window.addEventListener('repeat', detectHold(value));
  }
  
}

let detectHold =(pressedKey)=>{
  
  console.log(`${pressedKey} is hold.`);
}

window.onload = (()=>{

  
})

window.addEventListener('keydown', detectPressed);
