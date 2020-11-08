const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];


function addItem(element){
    console.log("Added")
    element.preventDefault()
    debugger
    const text = (element.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }

    items.push(item);
    this.reset();
};




addItems.addEventListener('submit', addItem)