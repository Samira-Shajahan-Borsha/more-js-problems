const numbers = [40, 500, 80, 50, 30, 100, 450, 580, 500, 40, 187, 50, 100, 40, 450];
function duplicateItems(nums){
    const unqiue = [];
    for(const element of nums){
        if(unqiue.indexOf(element) == -1){
            unqiue.push(element);
        }
    }
    return unqiue;
}
const unqiueNumbers = duplicateItems(numbers);
console.log(unqiueNumbers);