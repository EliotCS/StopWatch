    const StopWatch = document.getElementById("StopWatch");
    const Start = document.getElementById("Start");
    const Stop = document.getElementById("Stop");
    const Reset = document.getElementById("Reset");

    let running = false;
    let Startime = 0;
    let timer = null;
    let elapsedTime = 0;

    function update(){
        const currenttime = Date.now();
        const time = elapsedTime + (currenttime - Startime);

        let centisconds = Math.floor(time/10) % 100;
        let seconds = Math.floor(time/1000) % 60;
        let minutes = Math.floor(time/60000) % 60;
        let hours = Math.floor(time/3600000);

        let c = centisconds.toString().padStart(2,'0');
        let s = seconds.toString().padStart(2,'0');
        let m = minutes.toString().padStart(2,'0');
        let h = hours.toString().padStart(2,'0');
        

        StopWatch.textContent = h +":"+ m +":"+ s +":"+ c;

    };

    function start (){
        if (running == false){
            running = true;
            Startime = Date.now();
            timer = setInterval(update,10);
    } 
    }


    function stop (){
        if (running == true){
            running = false;
            clearInterval(timer);
            elapsedTime += Date.now() - Startime;
        } 
    }

    function reset (){
        stop();
        Startime = 0;
        running = false;
        elapsedTime = 0;
        StopWatch.textContent = "00:00:00:00";
    }

    Start.addEventListener("click", start);

    Stop.addEventListener("click", stop);

    Reset.addEventListener("click",reset);