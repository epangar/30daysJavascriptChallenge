const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle="5, 5, 67";
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';


let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;


let updateCoordinates = (event) => {
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

const draw = (event) =>{
    if(!isDrawing){
        return;
    }
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    
    
    console.log(ctx)
    ctx.moveTo(lastX, lastY); 

    ctx.lineTo(event.offsetX, event.offsetY); 

    ctx.stroke(); 
    
    updateCoordinates(event);
    
    
    if(hue >= 360 ){
        hue=0
    } else {

        if(ctx.lineWidth >= 200){
            hue = 1
        }

        hue++;
        ctx.lineWidth = hue;
    }

    
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    updateCoordinates(event)
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false)