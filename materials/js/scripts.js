



window.setInterval(function(){
    document.getElementById("hours").innerHTML = new Date().getHours();
    document.getElementById("minutes").innerHTML = new Date().getMinutes();
    document.getElementById("seconds").innerHTML = new Date().getSeconds();
}, 1000);