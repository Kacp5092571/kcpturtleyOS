let clickss = 0
function addtheclicks(){
    clickss = clickss + 1;
    document.getElementById('pointsdisplay').innerHTML = clickss;
    if (clickss > 29){
        alert('wow you actually spent your time doing this');
        alert('screenshot this to show off to your friends for absolutley no reason')
    };
}