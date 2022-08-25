// STOP WATCH
window.onload = () =>{
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var Interval;


    const changeHours = document.querySelector('#hours');
    const changeMinutes = document.querySelector('#minutes');
    const changeSeconds = document.querySelector('#seconds');
    const changeTens = document.querySelector('#tens');

    const btnStart = document.querySelector('#btn-start');
    const btnStop = document.querySelector('#btn-stop');
    const btnReset = document.querySelector('#btn-reset');


    btnStart.onclick = () =>{
        clearInterval(Interval);
        Interval = setInterval(setTimer,10);
    }

    btnStop.onclick = () =>{;
        clearInterval(Interval)
    }

    btnReset.onclick = () =>{
        clearInterval(Interval);
        hours = 00;
        minutes = 00;
        seconds = 00;
        tens = 00;

        changeHours.innerHTML = hours;
        changeMinutes.innerHTML = minutes;
        changeSeconds.innerHTML = seconds;
        changeTens.innerHTML = tens;
    }


    const setTimer = () =>{
        tens++;

        if(tens<=9){
            changeTens.innerHTML = "0" + tens;
        }

        if(tens>9){
            changeTens.innerHTML = tens;
        }

        if(tens>99){
            seconds++;
            changeSeconds.innerHTML = "0" + seconds;
            tens = 0
            changeTens.innerHTML = "0" + 0;

        }

        if(seconds>9){
            changeSeconds.innerHTML = seconds;
        }

        if(seconds>59){
            minutes++;
            changeMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            changeSeconds.innerHTML = "0" + 0;
        }

        if(minutes>9){
            changeMinutes.innerHTML = minutes;
        }

        if(minutes>59){
            hours++;
            changeHours.innerHTML = "0" + hours;
            minutes = 0;
            changeMinutes.innerHTML = "0"+0
        }

        
    }

    

}