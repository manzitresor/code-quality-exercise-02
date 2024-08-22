function flattenArray(arr) {
    let flattenedArray = [];
    if(!Array.isArray(arr)) return 0
    for(let element of arr){
        if(Array.isArray(element)){
            const nestedArr = flattenArray(element);
            for(let nestedElement of nestedArr) {
                flattenedArray.push(nestedElement)
            }
        } else {
            flattenedArray.push(element)
        }
    }
    return flattenedArray ;
}
const arr = [1, [2, [3, [4,[2]]]]];
console.log(flattenArray(arr))