const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];
function duplicateItems(names){
    const unqiue = [];
    // for(let i= 0; i < names.length; i++){
    //     const element = names[i];
    //     // console.log(element);
    // }
    for(const element of names){
        // console.log(element);
        if(unqiue.indexOf(element) == -1){
            unqiue.push(element);
        }
    }
    return unqiue;
}
const unqiueNames = duplicateItems(names);
console.log(unqiueNames);