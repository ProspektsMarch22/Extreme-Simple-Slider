const pixelMinimun = 100;
let times = 1;

function move() {
  const slideContainer = document.getElementById('slide')

  slideContainer.style.transform = `translate(-${ pixelMinimun * times }%)`;
  slideContainer.style.transitionDuration = '1s';
  
  (times === 1) ? times = 0 : times++;
}