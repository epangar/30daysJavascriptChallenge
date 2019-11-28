//window.onload = (()=>{
  let isShift = (event) => event.shiftKey;

  let checkbox = document.querySelectorAll('.inbox input')
  
  let detectPressed = (event) =>{

    if(isShift(event)){
       detectPortion();
    }
  
  }

  let detectPortion = () =>{
    
    let startAndEnd=[];

    checkbox.forEach((o,p)=>{
      if(o.checked){
        startAndEnd.push(p);
      }
    })


    if(startAndEnd.length>1){
      
      let start=startAndEnd[0];

      let end=startAndEnd[startAndEnd.length-1]

      checkbox.forEach((o,p)=>{
        if(p>start && p<=end){
          o.checked=true;
        }
      })

    }

  }



  window.addEventListener('keydown', detectPressed);


//})