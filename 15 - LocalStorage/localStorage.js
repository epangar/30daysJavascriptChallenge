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
    if (!element.target.matches('input')) return; // skip this unless it's an input
    const el = element.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);