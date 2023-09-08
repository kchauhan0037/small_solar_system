
// var sunfield = document.getElementById('sunfield');
// var currentClass = 'asteroid';

//     for(let i=0;i<10;i++){

//         sunfield.innerHTML += `<div class="asteroid" style="animation: rotate-asteroid 2000${i*-200}s linear infinite;@keyframes rotate-asteroid {
//             0% {
//                 transform: rotate(0deg) translateX(35${i+10}px)
//             }
    
//             100% {
//                 transform: rotate(360deg) translateX(35${i+10}px)
//             }
//         }"></div>`;
//     }
      

  
var sunfield = document.getElementById('sunfield');

for (var i = 0; i < 15; i++) {
    
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid';
        asteroid.style.animation = `rotate-asteroid 2000s linear infinite`;
        asteroid.style.animationDelay = `${i*-200}s`;
        asteroid.style.left = '50%';
        asteroid.style.top = '50%';
        const angle = (i / 10) * 2 * Math.PI;
    const distance = 100 + i * 20; 
    const x = distance * Math.tan(angle);
    const y = distance * Math.tan(angle);
        // var x=Math.random()*400
        // var y=Math.random()*420
        console.log(x)
        asteroid.style.transform = `translate(${x}px, ${y}px)`;
        sunfield.appendChild(asteroid);
    
    
}




