function setDate(){
  var date = new Date,
  
  current={
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds()
  },

  date = `${obj.h}:${obj.m}:${obj.s}`
  console.log(date)

  moveHands(current)
}

function moveHands(current){
  
}

(function clock(){

  setInterval(setDate,1000)
})()