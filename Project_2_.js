//this function will be called after each 1 second (1000 millisecond).
setInterval(() => {
    let date = new Date();                                 /*now "date" variable will store current time after each 1000milliseconds(1 second)*/

    let hours = date.getHours();                           /*now "hours" variable will store current time-hours*/
    let minutes = date.getMinutes();                        /*now "minutes" variable will store current time-minutes*/
    let seconds = date.getSeconds();                         /*now "seconds" variable will store current time-seconds*/

    /* These are simple formulas to get angle in DEGREES of particular Hand at any time.*/
    let hrotation = (30*hours) + (minutes/2);               /* angle in degrees for hour-hand*/
    let mrotation = 6*minutes;                               /* angle in degrees for minute-hand*/
    let srotation = 6*seconds;                               /* angle in degrees for second-hand*/

    //Now ______.style.transform ="rotate(xdeg)" will rotate that element with x degrees ABOUT CENTRE OF THAT ELEMENT, to rotate that element about bottom end in CSS do """transform-origin : bottom;"""  for those elements.
    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`             //this is written in `...` just becoz we wanted to use variable "hrotation" insise it, otherwise in "...." complete thing is taken as string.
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`

}, 1000);