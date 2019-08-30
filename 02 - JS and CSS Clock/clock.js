window.onload = () => {
  setInterval(setDate,1000) 
}

let setDate = () => {
  const date = new Date,
  
  current={
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds()
  };

  moveHands(current);
}


let moveHands= (current) => {
  
  setHand(current['h'], 'hour-hand');
  setHand(current['m'], 'min-hand');
  setHand(current['s'], 'second-hand');
    
}


let setHand= (number, hand) => {
  
  let myHand=document.getElementById(hand),
  
  objMultiplier={
    'hour-hand': 30,
    'min-hand': 6,
    'second-hand': 6,
  },
  
  degrees = number * objMultiplier[hand];
  
  myHand.style.transform=`rotate(${degrees + 90}deg)`
}





