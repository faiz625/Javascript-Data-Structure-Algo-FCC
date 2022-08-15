function telephoneCheck(str) {

  if (str.indexOf("(") === -1 && str.indexOf(")") > -1){
    return false;
  } 
  
  if(str.indexOf(")") - str.indexOf("(") >= 5){
    return false;
  }

  if (str[0] === "-"){
    return false;
  }
 if(str[12] == "-"){
    return false;
  }

  let actualNumber = str.replace(/-| /g,"")

  if (actualNumber.indexOf("(") < actualNumber.indexOf(")")){
    actualNumber = actualNumber.replace(/\(|\)/g,"");
  }

  if(actualNumber.length === 10){
    return true;
  } else if(actualNumber.length === 11 && actualNumber[0] == "1"){
    return true;
  }
  return false;
}

let result = telephoneCheck("55 55-55-555-5");
console.log(result);
