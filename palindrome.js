function palindromeChk(string) {
  //

  let reversedArray = string.toLowerCase().split('').reverse()
  //to lowercase and remove all spaces
  string = string.toLowerCase().replace(/\s+/g, '')
  reversedArray = reversedArray.join('').toLowerCase().replace(/\s+/g, '')
  console.log( string, reversedArray)

  if(string === reversedArray){
    console.log( 'it is palindrome')
    return true; //if palindrome
  }
  else{
    console.log('it is not palindrome')
    return false; //if palindrome
  }
}

console.log(palindromeChk("Murder for a jar of redcc rum"))
