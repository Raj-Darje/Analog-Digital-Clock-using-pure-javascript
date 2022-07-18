let d;

let time ;
let m;

// console.log(time);



setInterval(() => {

    d = new Date();
    m =(d.getMinutes()<10?'0':'') + d.getMinutes()
    s =(d.getSeconds()<10?'0':'') + d.getSeconds()


    time = d.getHours() + " : " + m + " : " + s;

    document.getElementById('timecontainer').innerHTML = time;
    document.getElementById("title").innerHTML = "🕒 -> " + d.getHours() + " : " + m;

    
}, 50);