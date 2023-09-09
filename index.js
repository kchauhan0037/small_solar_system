
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

for (var i = 0; i < 100; i++) {
    
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid';
        asteroid.style.animation = `rotate-asteroid 2000s linear infinite`;
        asteroid.style.animationDelay = `${i*-20}s`;
        asteroid.style.left = '50%';
        asteroid.style.top = '50%';
        const angle = (i * (360 / 100)) * (Math.PI / 180);
    const distance = 300 
    const x = distance * Math.cos(angle);
    const y = distance * Math.sin(angle);
        // var x=Math.random()*400
        // var y=Math.random()*420
        console.log(x)
        asteroid.style.transform = `translate(${x}px, ${y}px)`;
        sunfield.appendChild(asteroid);
    
    
} 