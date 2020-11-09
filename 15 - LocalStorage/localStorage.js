const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(element){
    element.preventDefault()
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(item)); 
    console.log(`Added ${item.text}`);
    this.reset();
};

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, position)=>{
        return `<li> 
                    <input 
                        type = "checkbox" 
                        data-index = ${position} 
                        id = "item${position}"
                        ${plate.done === true ? 'checked' : ''}/>
                    <label for="item${position}">${plate.text}</label>
                </li>`;
    }).join("")
}

function toggleDone(element){
    console.log(element)
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList);