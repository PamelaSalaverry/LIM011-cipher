window.cipher = {
  encode: (offSet, string)=>{
    let newMessage = '';
    for (let i=0; i<string.length; i++){
      let ascii = string.charCodeAt(i);
      if (ascii >=65 && ascii <=90){
        newMessage += String.fromCharCode ((ascii - 65 + parseInt(offSet)) % 26 + 65);
      } else if (ascii>=97 && ascii<=122){ 
        newMessage += String.fromCharCode ((ascii - 97 + parseInt(offSet)) % 26 + 97);
      } else if (ascii>=48 && ascii<=57){
        newMessage += String.fromCharCode ((ascii - 48 + parseInt(offSet)) % 10 + 48);
      } else {
        newMessage += string[i];
      }
      console.log(newMessage);
    }
    return newMessage;
  },

  decode: (offSet, string)=>{ 
    let newMessage = '';
    for (let i=0; i<string.length; i++){
      let ascii = string.charCodeAt(i);
      if (ascii >=65 && ascii <=90){
        newMessage += String.fromCharCode (((ascii - 90 - parseInt(offSet)) % 26) + 90);
      } else if (ascii>= 97 && ascii<= 122){
        newMessage += String.fromCharCode ((122-(122 - ascii + parseInt(offSet)) % 26));
      } else if (ascii>=48 && ascii<=57){
        newMessage += String.fromCharCode ((57-(57 - ascii + parseInt(offSet)) % 10));
      } else {
        newMessage += string[i];
      }
      console.log(newMessage);
    }
    return newMessage;
  }
};
