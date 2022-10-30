var key = 
    parseInt(bars[i].childNodes[0].innerHTML);
var key2 = 
    parseInt(bars[i + gap].childNodes[0].innerHTML);

var barval=document.getElementById("ele")
barval.innerHTML=
      `<h3>Element Selected is :${key} & ${key2}</h3>`;