let clickss = 0    
let timeusedorwasted = 0
let plumwords = " plum/s"
let fullthing = " "
function addtheclicks(){  
    clickss = clickss + 1;
clicksstr = toString(clicks);
fullthing = clicksstr + plumwords;
    document.getElementById('pointsdisplay').innerHTML = fullthing;   
  if (clickss > 29){
        alert('wow you actually spent your time doing this');
        alert('screenshot this to show off to your friends for absolutley no reason');
        console.log(idk);
        console.log('wow the player did this')
  }
setInterval(function otherotherthing(){
timeusedorwasted = timeusedorwasted + 1;
}, 1000)  
}
