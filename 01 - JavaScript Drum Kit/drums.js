let playIntrument = (myInstrument, data) => {

    let route = `./sounds/${myInstrument}.wav`,
        playMe= new Audio( route ),
        played=document.querySelector(`[data-key='${data}']`);

    played.classList.add('playing');
    setTimeout(()=>{played.classList.remove('playing')}, 300);  
    playMe.play(); 
    
}

(() => {
    
    document.addEventListener('keyup', (pressedKey) =>{
    
        let sounds = {
            "a":"clap",
            "s":"hihat",
            "d":"kick",
            "f":"openhat",
            "g":"boom",
            "h":"ride",
            "j":"snare",
            "k":"tom",
            "l":"tink",
        },
        
        myKey=pressedKey.key,
        data=pressedKey.keyCode,
        myInstrument=sounds[myKey];
        
         playIntrument(myInstrument,data)
    });
})()