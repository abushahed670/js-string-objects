const sentence = 'I am learning web dev.';
//one way to reverse
for(const letter of sentence){
    console.log(letter)
}

// // another  way 
let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);

// // another way to reverse for loop 

let rev = '';
for(let i = 0;i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;

}
console.log(rev);

// shortcut system of  reverse 
const sentence = 'I am learning web dev.';
const reversed = sentence.split('').reverse().join('');
console.log(reversed)