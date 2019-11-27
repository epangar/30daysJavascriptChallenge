const dogs = [
  { name: 'Snickers', age: 2 }, 
  { name: 'Hugo', age: 8 }
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');
// Interpolated
console.log('Hello, I\'m a %s and I\'m doing the Javascript 30 Day Challenge', 'programmer');
// Styled
console.log('%c Testing styles', 'font-size: 50px; color: red;');
// warning!
console.warn('This is a warning');
// Error :|
console.error('This is an error');

// Info
console.info('This is info');
// Testing
console.info('console.assert() will react if the condition is wrong')
console.assert(1===1, 'WRONG');
console.assert(1===0, 'WRONG');
// clearing

/*console.clear()*/

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p)
console.dir(p)
// Grouping together

dogs.forEach(dog =>{
  console.group(`${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old.\n That is ${dog.age * 7} in dog years.`)
  console.groupEnd(`${dog.name}`);
})
// counting

console.count("Hi");
console.count("Hi");
console.count("Hi");
console.count("Hi");
console.count("Hi");

// timing

console.time('fetching data');
fetch('https://api.chucknorris.io/jokes/random')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});

console.table(dogs)