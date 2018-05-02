function titlecase(string){
  let array = string.toLowerCase().split(" ")
  for( let i=0; i< array.length; i++){
    array[i] = array[i][0].toUpperCase() + array[i].slice(1)
    console.log(array[i], array[i].slice(1))
  }
  console.log(array.join(" "))
  return array.join(" ")
}

console.log(titlecase("Murder for a jar of red rum"))
