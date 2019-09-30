

window.onload = () => {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    let cities = [];

    fetch(endpoint)
        .then((response) => response.json())
        .then((myJson) => {
                cities = myJson.map(function(city){
                  return city;
                });
            });
            
            
        
    
    const myInput = document.querySelector(".search");
    console.log(myInput);
    myInput.addEventListener('input', searchCities);

    function searchCities(){
        let query=this.value;
        console.log(query);
        //console.log(cities);
        let filtered=cities.map(city=>Object.values(city))
                            //.filter(city=>city.includes("a"))
        console.log(filtered)
    }
}
