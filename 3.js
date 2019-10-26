
const boxMaker = (repetition) => {
  
  if (repetition < 1 || repetition %2 === 0) {
    console.log("please input odd number and above 0");
  } else {
    for (let x = 0; x < repetition; x++) {
      let string = ""
      for (let y = 0; y < repetition; y++) {
        if (x%2 === 0 || x === 0 || y === 0 || y === repetition-1) {
          string += " * "
        } else {
          string+= " = "
        }
      }
      console.log(string)
    }
  }
}

console.log(boxMaker(5));
