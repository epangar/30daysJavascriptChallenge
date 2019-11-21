window.onload = () => {

    const iframe = document.querySelectorAll('.inline-frame');
    const buttons = document.querySelectorAll('.button')
    //console.log(iframe)
    //console.log(buttons)

    
    buttons.forEach(button => {
        //console.log(button.value)
        button.addEventListener('click', changeSRC(button))
    });
    
}
let changeSRC = (element) =>{
    debugger
    let value = element.value;
    //console.log(iframe)
    //iframe.href="http://www.google.com";
}


