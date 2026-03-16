let clickss = 0    
let timeusedorwasted = 0
let pm = 1
function addtheclicks(){
  console.log("If you're seeing this, then WHY ARE YOU IN THE JAVASCRIPT CONSOLE??")  
    clickss = clickss + 1*pm;
    document.getElementById('pointsdisplay').innerHTML = clickss;   
  if (clickss > 1000){
        alert('wow you actually spent your time doing this');
        alert('screenshot this to show off to your friends for absolutley no reason');
        console.log("idk");
        console.log('wow the player did this')
  }
setInterval(function otherotherthing(){
timeusedorwasted = timeusedorwasted + 1;
}, 1000)  
}

function dcpc(){
if (clickss>49){
pm = 2;
}else{
  let clickslefttodc = 50 - clickss;
  alert("SCAMMER! You don't even have enough points for this ability. Click OK to see how much more clicks you need.")
  alert(clickslefttodc)
}
}