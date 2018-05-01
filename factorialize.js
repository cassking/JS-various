//factorializeNumber//
//ex 4*3*2*1=

function factorialize(number) {
  //get all numbers before it
  let numberBucket = 1;//multiply number by 1
  //to start
  for( let i=1; i<=number; i++){
    console.log(i)
    numberBucket = numberBucket*i
    //or
    //numberBucket *=i
  }
  return numberBucket
}

console.log(factorialize(8))
