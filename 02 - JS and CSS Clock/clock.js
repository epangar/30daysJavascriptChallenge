function setDate(){
  var date = new Date,
  
  current={
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds()
  }

  moveHands(current);
}

function setHand(number, hand){
  var myHand=document.getElementsByClassName(hand).style.property()
}

function moveHands(current){
  console.log(current)

  

}

(function clock(){

  setInterval(setDate,1000) 
})()