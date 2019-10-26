
var data = [
  ["g","e","f"],
  ["a","c","b","e","d"],
  ["g","e","f"],
  ["i","c","b","e","d"],
  ["h","c","b","e"],
  ["j","e","f"],
  ["a","c","b","e"],
  ["a","c"],
  ["f"],
  ["g"]
]

const neatArray = (datum) => {
  let letterSortContainer = []
  for (let x = 0; x < datum.length; x++) {
    let sortedArray = datum[x].sort()
    letterSortContainer.push(sortedArray)
  }
  let temp = 0
  let result = []
  let copied = letterSortContainer.slice(0)
  while (result.length !== letterSortContainer.length) {
    for (let y = 1; y < copied.length; y++) {
      if (copied[temp].length > copied[y].length) {
        temp = y
      }
    }
    result.push(copied[temp])
    copied.splice(temp, 1)
    temp = 0
  }
  return result
}

console.log(neatArray(data));

