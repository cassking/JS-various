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
// function largestOfArrays(array){
//   //return largest numbers in each innner array
//   let maxes =[0,0,0,0]
//   for(let i=0;i < array.length; i++){
//     for(let j=0; j<array[i].length;j++){
//       console.log('inner loop',array[i][j])//dig into innner array
//       //j is index of inner loop
//       let currentNumber = array[i][j]//
//       if( currentNumber >= maxes[i]) {//i referes to outer loop, 4 arrays
//         console.log('current', currentNumber, 'maxes[i]',maxes[i])
//         maxes[i] = currentNumber
//       }
//     }
//   }
//   console.log(maxes)
//   return maxes
// }
function findMax(array){
  let max = array[0]//first elem
  for (let i=0; i< array.length;i++){
    if (array[i] >max){
      max = array[i]
    }
  }
  console.log('findMax result',max)
  return max
}
function largestOfArrays(array){
  //return largest numbers in each innner array
  let maxes =[]
  for(let i=0;i < array.length; i++){
    console.log(array[i])//inner arrays
    let innerMax = findMax(array[i])//return max for eac of 4 arrays
    maxes.push(innerMax)
  }
  console.log(maxes)
  return maxes
}
let twoDimArr =[[4,5,1,300],[13,23,45,56], [1,23,8,90],[87,2,78,999]]
console.log(largestOfArrays(twoDimArr))
