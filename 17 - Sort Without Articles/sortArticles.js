const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

const trimBand = band => band.replace(/^(a |the |an )/i, '').trim()

const sortedBands = bands.map(o=>o).sort((a,b)=>{
    return (trimBand(a) < trimBand(b) ) ? -1 : 1;
})

console.log(sortedBands);

const bandsList = document.getElementById('bands');

sortedBands.forEach(band => {
    let myLI = document.createElement('LI');
    let myBand = document.createTextNode(band);
    myLI.appendChild(myBand);
    bandsList.appendChild(myLI);
})
