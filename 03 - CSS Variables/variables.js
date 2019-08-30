window.onload=()=>{
  const inputs= document.querySelectorAll('.controls input');
  
  function handleUpdate() {
    console.log(this.dataset.sizing)
  }
  
  inputs.forEach(input => input.addEventListener('change', handleUpdate))
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
}