
const serializer = (amount) => {
  const alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const length = alphaNum.length
  for (let x = 0; x < amount; x++) {
    let container = ""
    let counter = 0
    for (let index = 0; index < 16; index++) {
      counter += 1
      container += alphaNum.charAt(Math.floor(Math.random() * length));    
      if (counter%4 === 0 && counter < 16) {
        container += "-"
      } 
    }
    console.log(container);
  }
}

console.log(serializer(10));
