window.onload=()=>{
    const iframe = document.querySelectorAll('.inline-frame');
    const inputs = document.querySelectorAll('input'); 
    
    function changeSRC() {
        console.clear();

        const value = this.value;
        
        iframe[0].attributes[4].value = `./${value}/index-START.html`
    }

    inputs.forEach(input => {
        input.addEventListener('change', changeSRC)
    });
}    






