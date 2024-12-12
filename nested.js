const college ={
    name: 'vnc',
    class: [11, 12,],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        class: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(college); 
// console.log(college.unique.result.gpa)
// to change gpa value
college.unique.result.gpa = 4.5;
console.log(college.unique.result.gpa);

// to delete 

delete college.class;
console.log(college);