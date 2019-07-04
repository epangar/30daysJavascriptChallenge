let getInstrument = (pressedKey) =>{
    
    console.log(pressedKey)
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

    data=pressedKey.keyCode,

    myInstrument=sounds[myKey];
    
    playIntrument(myInstrument,data);
}

let playIntrument = (myInstrument, data) => {

    let route = "./sounds/"+myInstrument,
        playMe= new Audio( route ),
        played=document.querySelector("[data-key='" +data+"']");

    
    played.classList.add('playing')
    setTimeout(()=>{played.classList.remove('playing')}, 300)   
    playMe.play();    
    
}

let drums = (() => {
    
    document.addEventListener('keyup', getInstrument);

})()