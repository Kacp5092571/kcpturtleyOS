function devtools(){
    let devtools = 1
if (devtools === 1){
    let choice = prompt("a - crazy mode b - Load legacy game files");
    if (choice === "a"){
        let thing = prompt('purple (a) or weird (b)?')
        if (thing === "a"){
        document.getElementById("hi").style.backgroundColor = "purple";
       if (thing = "b"){
        document.getElementById("hi").style.backgroundColor = "honeydew"
      }
      }
     }
     if (choice === "b"){
      alert("Loading system files...")
      window.location.href='https://kacp5092571.github.io/kcpturtleyOS/secretgamelegacy/'
      alert('Complete!')
     }
  }
}

