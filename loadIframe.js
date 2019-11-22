window.onload=()=>{
    const iframe = document.querySelectorAll('.inline-frame');
    const inputs = document.querySelectorAll('input'); 
    
    function changeSRC() {
        console.clear();

        const value = this.value;
        
        iframe[0].attributes[4].value = `./${value}/index-START.html`
        console.log(value)
        console.log(iframe[0].attributes[4].value)
    }

    inputs.forEach(input => {
        input.addEventListener('change', changeSRC)
    });
}    






