function reverseString(string) {
  let stringArray = string.split('')
  string = stringArray.reverse().join("")
  return string
}
console.log(reverseString("who are you"))
