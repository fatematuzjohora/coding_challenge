function catAndMouse(x, y, z){
    let diffx = Math.abs(z-x);
    let diffy = Math.abs(z-y);
 
    if(diffx === diffy){
        return "Mouce C";
    } else{
        if(diffx < diffy){
            return "Cat A";
        }else{
            return "Cat B";
        }
    }
};
let race = catAndMouse(1, 2, 3);
console.log(race);

// grading students hackerrank solution in javascript
function gradingStudents(grades) {
    // Write your code here
    let gradesFinal = [];
    for(let i=0; i<grades.length; i++){
        if(grades[i]< 38){
            gradesFinal.push(grades[i]);
        }else if(((Math.ceil(grades[i]/5)*5) - grades[i]) < 3){
            gradesFinal.push(Math.ceil(grades[i]/5)*5);
        }else if(((Math.ceil(grades[i]/5)*5) - grades[i]) >= 3){
            gradesFinal.push(grades[i]);
        }
    }
    return gradesFinal;
}
