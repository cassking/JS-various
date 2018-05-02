// function largestOfArrays(array){
//   //return largest numbers in each innner array
//   let maxes =[]//store max nums in each innter array
//   for(let i=0;i < array.length; i++){
//     let maxNumTemp = array[i][0]//first nums of each
//     console.log(maxNumTemp)
//     for(let j=0; j<array[i].length;j++){
//       console.log('inner loop',array[i][j])//dig into innner array
//       //j is index of inner loop
//       let currentNumber = array[i][j]//
//       if( currentNumber >= maxNumTemp) {
//         console.log('current', currentNumber, 'maxtemp',maxNumTemp)
//         maxNumTemp = currentNumber
//       }
//     }
//     maxes.push(maxNumTemp)
//   }
//   console.log(maxes)
//   return maxes
// }
//alerternate way
function largestOfArrays(array){
  //return largest numbers in each innner array
  let maxes =[0,0,0,0]
  for(let i=0;i < array.length; i++){
    for(let j=0; j<array[i].length;j++){
      console.log('inner loop',array[i][j])//dig into innner array
      //j is index of inner loop
      let currentNumber = array[i][j]//
      if( currentNumber >= maxes[i]) {//i referes to outer loop, 4 arrays
        console.log('current', currentNumber, 'maxes[i]',maxes[i])
        maxes[i] = currentNumber
      }
    }
  }
  console.log(maxes)
  return maxes
}
let twoDimArr =[[4,5,1,300],[13,23,45,56], [1,23,8,90],[87,2,78,999]]
console.log(largestOfArrays(twoDimArr))
