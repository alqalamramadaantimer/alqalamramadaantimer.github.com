
const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl= document.getElementById('seconds');



const ramadaan ="3 april 2022";

function countdown(){
    const ramadaansDate = new Date(ramadaan);
    const currentDate = new Date();

    const totalSeconds = (ramadaansDate-currentDate)/1000;
  
  
  
     const days = Math.floor(totalSeconds / 3600 / 24);
     const hours = Math.floor(totalSeconds / 3600) % 24;
     const mins = Math.floor(totalSeconds / 60) % 60;
     const seconds = Math.floor(totalSeconds) % 60;
    
     
     daysEl.innerHTML= days;
     hoursEl.innerHTML= hours;
     minsEl.innerHTML = mins ; 
     secondsEl.innerHTML= seconds;

    


console.log(days,hours,mins,seconds);

 
}

countdown();




setInterval(countdown, 1000);













 














