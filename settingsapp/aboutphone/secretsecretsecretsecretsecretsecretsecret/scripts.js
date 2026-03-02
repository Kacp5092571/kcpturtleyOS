let changes = 0
let textmessage = "BANANA"
function changething(){
    changes = changes + 1;
     if (changes ===1){
      textmessage = "BANANa";
    };
     if (changes ===2){
      textmessage = "BANAna";
    };
     if (changes ===3){
      textmessage = "BANana";
    };
         if (changes ===4){
      textmessage = "BAnana";
    };
             if (changes ===5){
      textmessage = "Banana";
    };
             if (changes ===6){
            textmessage = "banana";
      alert('Banana!"');
    };
    document.getElementById('changeable').innerHTML = textmessage;
}