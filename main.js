function crazyCase(str) {
  let newNewStr = '';
  for (let i = 0; i<str.length; i++){
    if (i%2===0){
    newNewStr += str[i].toLowerCase();
    } else{
      let newNewLetter = str[i].toUpperCase();
      newNewStr += newNewLetter;
    }
  } return newNewStr;
}

function ciEmailify(str) {
  let emailStr = '';
  for (let i=0; i<str.length; i++){
    if (str[i] !== ' '){
      emailStr += str[i].toLowerCase();
    } else {
      emailStr += '.';
    }
  } return emailStr +'@codeimmersives.com'
}

function exclaim(str) {
  let newStr = '';
  for (let i=0; i<str.length; i++){
    if (str[i] === '?' || str[i] === '.'){
      newStr += '!';
    } else{
      newStr += str[i];
    }
  } return newStr;
}

function reverse(str) {
  let reverseString = '';
  for (let i=1; i<=str.length; i++){
    reverseString += str[str.length - i]
  } return reverseString;
}

  function crazyCase2ReturnOfCrazyCase(str) {
    let newStr = '';
    let counter = 0;
    for (let i = 0; i<str.length; i++ ){
      if(str[i] === ' '){
      newStr += ' ';
      counter++;
      } else if (counter%2===0){
      newStr += str[i].toLowerCase();
      }else{
      newStr += str[i].toUpperCase();
    }counter++
    } return newStr;
  }

  function titleCase(str) {
    let newStr = '';
    for (let i = 0; i<str.length; i++){
      if (i === 0) {
        newStr += str[0].toUpperCase();
      } else if (str[i] === ' '){
        newStr += ' '
        i++;
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
    } return newStr;
  }

function onlyVowels(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
  if ('AEIOUaeiou'.includes(str[i])){
    newStr += str[i]
  }
  }return newStr;
}

function crazyCase3SonOfCrazyCase(str) {
    let newStr = '';
    let counter = 0;
    for (let i = 0; i<str.length; i++ ){
      if(str[i] === ' '){
      newStr += ' ';
      counter++;
      } else if('!@#$%123456789,.())'.includes(str[i])){
        newStr += str[i].toLowerCase();
        counter++;
      }else if (counter%2===0){
        newStr += str[i].toLowerCase();
      }else{
      newStr += str[i].toUpperCase();
    }counter++;
  } return newStr;
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