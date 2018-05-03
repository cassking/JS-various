// function repeatStringNumTimes(string,number){
//   if (number < 0){
//     return ""//empty string
//   } else {
//     return string.repeat(number)
//   }
// }

// function repeatStringNumTimes(string,number){
//   let finalString = ""
//   if (number < 0) {
//     return ""
//   } else {
//     for( let i=0; i<number;i++){
//       finalString+=string
//     }
//   }
//   return finalString
// }


function repeatStringNumTimes(string,number){
if (number < 0 ) {
  return ""
} else if (number ===1) {
  return string
} else {
  return string += repeatStringNumTimes(string, number -1)
}
}

console.log(repeatStringNumTimes("hello", 3))
