function devtools(){
    let devtools = 1
if (devtools === 1){
    let choice = prompt("a - crazy mode b - Load legacy game files c - Boot secondary operating system d - View HTML creation logs");
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
      alert("Loading system files... (access key is 02OG")
      window.location.href='https://kacp5092571.github.io/kcpturtleyOS/secretgamelegacy/'
      alert('Complete!')
     }

     if(choice === "c"){
        alert('Loading... Press OK to continue')
        window.location.href='https://kacp5092571.github.io/kcpturtleyOS/ultimate'
     }

     if(choice === "d"){
        window.location.href='https://github.com/Kacp5092571/kcpturtleyOS/blob/main/updatelogs.md'
     }
  }
}

