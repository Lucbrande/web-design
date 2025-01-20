"use strict"

const $ = selector => document.querySelector(selector);



const showdates = () =>{
    console.log("It got here");
    const today = new Date();
    const T = today.toISOString().indexOf('T')
    
    let minDate = new Date();
    let day = today.getDate() - 30;
    console.log(today);
    console.log(T);

        $("#purchase_date").value = today.toISOString().substring(0, T);
        $("#purchase_date").max = today.toISOString().substring(0, T);
        $("#purchase_date").min = minDate.toISOString(minDate.setDate(day)).split('T').shift();

}




const showDateTypes = () =>{

    $("#today").value = today;
    $("#dateTime").value = today.toLocaleString;
    $("#dateOnly").value = today.toLocaleDateString;
    $("#timeOnly").value = today.toLocaleTimeString;
    $("#gmt").value = today.toTimeString();

    $("#utc").value = today.toUTCString();
    $("#iso").value = today.toISOString();
}
const dateMath = () =>{

    let timepast = 0;
    let timeleft = 0;

    let preParse = Date.parse($("#from").value);
    console.log(`to: ${fromValue}`);
    
    let toValue = Date.parse($("#to").value);
    console.log(toValue);

    const oneDay = 24 * 60 * 60 * 1000;

    if(isNaN(fromValue) || isNaN(toValue) ){
        alert("[pease choose a valid date")
    }
    else{
        $("#start").value = "";
        $("#end").value = "";

        let start = fromValue;
        let end = toValue;

        let time = today.getTime();
        timepast = start - time;
        timepast = Math.ceil(timepast / oneDay);
        console.log(Math.ceil(4));
        console.log(Math.ceil(65.5));
        console.log(Math.ceil(7.004));
        console.log(Math.floor(7.004));

        timeleft = end - time;
        timeleft = Math.ceil(timeleft / oneDay);

        $("#start").value = timepast;
        $("#end").value = timeleft;
    }
}

    document.addEventListener("DOMContentLoaded", () => {
        showdates();

     
    });

