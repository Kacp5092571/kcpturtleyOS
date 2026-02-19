let changes = 0
let textmessage = "SAUSAGE"
function changething(){
    changes = changes + 1;
     if (changes ===1){
      textmessage = "SAUSAGe";
    };
     if (changes ===2){
      textmessage = "SAUSAge";
    };
     if (changes ===3){
      textmessage = "SAUSage";
    };
         if (changes ===4){
      textmessage = "SAUsage";
    };
             if (changes ===5){
      textmessage = "SAusage";
    };
             if (changes ===6){
      textmessage = "SAusage";
    };
         if (changes ===7){
      textmessage = "SAusage";
    };
             if (changes ===8){
      textmessage = "Sausage";
      alert('Sausage!');
    };
    document.getElementById('changeable').innerHTML = textmessage;
}