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
  console.log(current)

  let hourHand=setHand(current['h'], 'hour-hand'),
  minHand=setHand(current['m'], 'min-hand'),
  secondHand=setHand(current['s'], 'second-hand');
  

}


function setHand(number, hand){
  console.log(number, hand)
  var myHand=document.getElementsByClassName(hand)
  console.log(myHand)
  //myHand.forEach(item=>item.style.border="1px solid #FAB"+(number*10).toString())
  //
}



(()=>{

  setInterval(setDate,1000) 
})()