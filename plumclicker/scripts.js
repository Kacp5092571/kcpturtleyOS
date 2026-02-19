let clickss = 0    
let timeusedorwasted = 0
function addtheclicks(){
  clickss = clickss + 1;
setInterval(function otherthing(){
    document.getElementById('pointsdisplay').innerHTML = clickss;    
    if (clickss > 29){
        alert('wow you actually spent your time doing this');
        alert('screenshot this to show off to your friends for absolutley no reason');
    };
}, 500)
setInterval(function otherotherthing(){
timeusedorwasted = timeusedorwasted + 1;
}, 1000)  
}
