// i've applied for the second part of school

const phrase = 'I Love Dev School <3';

function logRandomlyRepeatedString(str) {
  let num = Math.random() * 10;
  while (num >= 0) {
    console.log(str);
    num--;
  }
}

logRandomlyRepeatedString(phrase);
