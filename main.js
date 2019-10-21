function crazyCase(str) {
  let newNewStr = '';
  let newStr = str.toLowerCase()
  for (let i = 0; i<newStr.length; i++){
    if (i%2===0){
    newNewStr = newNewStr + newStr[i];
    } else{
      let newLetter = newStr[i];
      let newNewLetter = newLetter.toUpperCase();
      newNewStr = newNewStr + newNewLetter;
    }
  } return newNewStr;
}

function ciEmailify(str) {
  let newNewStr = '';
  let newStr = str.toLowerCase()
  for (let i=0; i<str.length; i++){
    if (newStr[i] !== ' '){
      newNewStr = newNewStr + newStr[i];
    } else {
      newNewStr = newNewStr + '.'
    }
  } return newNewStr +'@codeimmersives.com'
}

function exclaim(str) {
  let newStr = '';
  for (let i=0; i<str.length; i++){
    if (str[i] === '?' || str[i] === '.'){
      newStr = newStr + '!';
    } else{
      newStr = newStr + str[i];
    }
  } return newStr
}

function reverse(str) {
  let reverseString = '';
  for (let i=1; i<=str.length; i++){
    reverseString = reverseString + str[str.length - i]
  } return reverseString;
}

  function crazyCase2ReturnOfCrazyCase(str) {
    let newNewStr = '';
    let lowerCaseString = str.toLowerCase()
    let counter = 0;
    for (let i = 0; i<lowerCaseString.length; i++ ){
      if(lowerCaseString[i] === ' '){
      newNewStr = newNewStr + ' ';
      counter++
      } else if (counter%2===0){
      newNewStr = newNewStr + lowerCaseString[i];
      }else{
      let newLetter2 = lowerCaseString[i];
      newNewStr = newNewStr + newLetter2.toUpperCase();
    }counter++
    } return newNewStr
  }

  function titleCase(str) {
    let newStr = '';
    let lowerCaseString = str.toLowerCase();
    for (let i = 0; i<str.length; i++){
      if (i === 0) {
        newStr = newStr + lowerCaseString[0].toUpperCase();
      } else if (lowerCaseString[i] === ' '){
        newStr = newStr + ' '
        i++
        let newestLetter = lowerCaseString[i];
        let newNewLetter2 = newestLetter.toUpperCase();
        newStr = newStr + newNewLetter2
      } else {
        newStr = newStr + lowerCaseString[i];
      }
    } return newStr;
  }

function onlyVowels(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
  if ('A,E,I,O,U,a,e,i,o,u'.includes(str[i])){
    newStr = newStr + str[i]
  }
  }return newStr 
}

function crazyCase3SonOfCrazyCase(str) {
    let newNewStr = '';
    let lowerCaseString = str.toLowerCase()
    let counter = 0;
    for (let i = 0; i<lowerCaseString.length; i++ ){
      if(lowerCaseString[i] === ' '){
      newNewStr = newNewStr + ' ';
      counter++
      } else if('\,,.,!,@,#,$,%,1,2,3,4,5,6,7,8,9,\(,\)'.includes(str[i])){
        newNewStr = newNewStr + lowerCaseString[i];
        counter++
      }else if (counter%2===0){
      newNewStr = newNewStr + lowerCaseString[i];
      }else{
      let newLetter2 = lowerCaseString[i];
      newNewStr = newNewStr + newLetter2.toUpperCase();
    }counter++
  } return newNewStr
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}