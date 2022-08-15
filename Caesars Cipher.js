function rot13(str) {
  const letters = "NOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return str.split("").map((letter) => {
    const index = letters.lastIndexOf(letter)

    if(index === -1){
      return letter;
    }
    return letters[index - 13]
  }).join("")
}

rot13("SERR PBQR PNZC");
