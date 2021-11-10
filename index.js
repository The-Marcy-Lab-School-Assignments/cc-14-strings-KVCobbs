//write your code here
function stripUppercase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase())
      newString += string[i];
  }
  return newString;
}

console.log(stripUppercase('SevenEleven'))

/* Algorithm 
first declare a new variable as an empty string(new string). this will hold the new string.
iterate through the sting looking for the uppercase variables. 
if the string[i] is equal to string with the method .toLowerCase then take the lowercase letters and make that a new string
then make the new string (add/concatenate) the new string with the old sting with the lowercase letters 
Return newString


*/