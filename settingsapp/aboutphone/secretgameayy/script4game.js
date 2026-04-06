let count = 0
let plug = 0

function tryplug(){
    if (count < 3) {
        count = count + 1
    } else {
      plug = 1
      alert('yay')  
    }
}