function longestW(string) {
  let array = string.split(" ")// split at spaces
  console.log(array)
  let longest =''
  for (let word of array){// iterate over elements only no indeces
    if(word.length > longest.length) {
      longest = word
      console.log(longest, word)
    }
  }
  return longest

}

console.log(longestW("a small group of words standing together as a conceptual unit, typically forming a component of a clause"))
