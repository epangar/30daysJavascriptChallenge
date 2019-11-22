let  debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

let checkImage = ()=>{
  

  images.forEach(image=> {

    const activateAt = (window.scrollY + window.innerHeight) - image.height / 2;
    
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = activateAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }

  });
}



const images = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', debounce(checkImage))

