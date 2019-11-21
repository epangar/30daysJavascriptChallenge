const pressed=[];

const secretCode="konami"

let whenPressedKey = (pressedKey) => {
    
    let value=pressedKey.key
    pressed.push(value)
    
    let total=pressed.slice(-secretCode.length).join('')

    if(total.includes(secretCode)){
        cornify_add();
    }
}

window.addEventListener('keyup', whenPressedKey)


