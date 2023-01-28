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