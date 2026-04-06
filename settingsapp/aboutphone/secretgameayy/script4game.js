let moveright = 22
let moveleft = -22
let count = 0
let plugged = 0
alert("Low battery. Please plug in charger.")
alert("Battery life - N/A seconds remaining")
function tryplug(){
    if (count === 3) {
     plugged = 1
    } else {
    count = count + 1
    }
    if (plugged = 1) {
        alert('insert charging noises')
    }
}