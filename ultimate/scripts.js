function biggamestext(){
    document.getElementById("gamespara").style.fontSize = "50px";
}

let secl = 0
document.addEventListener('keydown', event)

function down(){
    secl = secl + 1
    if (secl===1){
        document.getElementById("hi").style.fontSize = "30px"
    }else{
        document.getElementById("hi").style.fontSize = "16px"
        if (secl===2){
            document.getElementById("hi2").style.fontSize = "30px"
        }else{
document.getElementById("hi2").style.fontSize = "16px";
if (secl===3){
    document.getElementById("hi3").style.fontSize = "30px";
}else{
    document.getElementById("hi3").style.fontSize = "16px";
}
if (secl===4){
    secl=1
}
        }
    }
}