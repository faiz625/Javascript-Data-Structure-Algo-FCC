function convertToRoman(num) {
 const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40,10, 9, 5, 4, 1];
 const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
let value = ""

  for(let i=0; i<arabicNumerals.length; i++){
    while(num >= arabicNumerals[i]){
      value += romanNumerals[i]
      num -= arabicNumerals[i]
    }
  }

 return value;
}
