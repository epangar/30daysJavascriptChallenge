let getInstrument = (pressedKey) =>{
    
    let sounds = {
        "a":"clap.wav",
        "s":"hihat.wav",
        "d":"kick.wav",
        "f":"openhat.wav",
        "g":"boom.wav",
        "h":"ride.wav",
        "j":"snare.wav",
        "k":"tom.wav",
        "l":"tink.wav",
    },
    
    myKey=pressedKey.key,

    myInstrument=sounds[myKey];
    
    playIntrument(myInstrument);
}

let playIntrument = (myInstrument) => {
    let route = "./sounds/"+myInstrument,
        playMe= new Audio( route );

    playMe.play();
     
}

let drums = (() => {
    
    document.addEventListener('keyup', getInstrument);

})()