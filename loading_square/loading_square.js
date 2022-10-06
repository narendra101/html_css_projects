let side1 = document.getElementById('side1')
let side2 = document.getElementById('side2')
let side3 = document.getElementById('side3')
let side4 = document.getElementById('side4')
// side1.classList.add('hide')
side2.classList.add('hide')
side3.classList.add('hide')
side4.classList.add('hide')
let time = 1000
const animate = () => {            
    setTimeout(() => {        
        side1.classList.toggle('hide')                   
        side3.classList.toggle('hide')
    }, time);
    setTimeout(() => {
        side2.classList.toggle('hide')
    }, time-500);    
    setTimeout(() => {        
        side4.classList.toggle('hide')
    }, time+500);    
    setTimeout(animate, 1000);

}
animate()