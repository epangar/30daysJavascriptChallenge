function setDate(){
  var date = new Date,
  
  current={
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds()
  }

  moveHands(current);
}


function moveHands(current){
  
  let hourHand=setHand(current['h'], 'hour-hand'),
  minHand=setHand(current['m'], 'min-hand'),
  secondHand=setHand(current['s'], 'second-hand');
  
  
}


function setHand(number, hand){
  console.log(number, hand)
  let myHand=document.getElementById(hand),
  objMultiplier={
    'hour-hand': 30,
    'min-hand': 6,
    'second-hand': 6,
  },
  degrees = number*objMultiplier[hand];
  
  myHand.style.transform="rotate("+ degrees +"deg)"
}



(()=>{
  setInterval(setDate,1000) 
})()