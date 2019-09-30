window.onload = () => {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const cities = [],
    myInput = document.querySelector(".search");

    fetch(endpoint)
    .then((response) => response.json())
    .then((myJson) => {
        cities.push(...myJson);
    });
    
    let searchCities = () =>{
        
        const query=myInput.value,        
        expression = new RegExp(query, 'gi'),
        filtered = cities.filter(element =>
            element.city.match(expression) || element.state.match(expression));
        
            
        buildList(filtered)
    }

    let buildList = (array) =>{
        
        const list = document.querySelectorAll('.suggestions')[0];

        if(list.hasChildNodes()){
            debugger
            emptyList(list)
        }
        
        array.forEach(place=>{
            let LI =document.createElement('LI');
            let cityName= document.createTextNode([
                place.city,
                " "+place.state
                
            ]);
            let population = document.createTextNode(" "+place.population)
            
            LI.appendChild(cityName);
            LI.appendChild(population);
            list.appendChild(LI);

        })


    }

    let emptyList = (element) => {
        
        while(element.hasChildNodes()){

            element.removeChild(element.childNodes[0])
        }
    }
    
    myInput.addEventListener('input', searchCities);
}

