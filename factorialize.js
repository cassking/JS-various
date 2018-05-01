//factorializeNumber//
//ex 4*3*2*1=

function factorialize(number) {
  //get all numbers before it
  let numberSave = 1;//multiply number by 1
  //to start
  for( let i=1; i<=number; i++){
    console.log(i)
    numberSave = numberSave*i
    //or
    //numberBucket *=i
  }
  return numberSave
}

console.log(factorialize(8))
