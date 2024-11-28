// case sensitive to solve this toLowerCase or to UpperCase 


const subject = 'Chemistry';
const book = 'chemistry';


if(subject.toLowerCase === book.toLowerCase){
    console.log('you are in the right way:');

}
else{
    console.log('back home to read again')
}


//another case `sensitive for the space or length to solve white space use trim()
const drink = 'water';
const liquid = '  water   ';

if(drink.trim() === liquid.trim()){
    console.log(' drink water');
}
else{
    console.log('do not drink water');
}