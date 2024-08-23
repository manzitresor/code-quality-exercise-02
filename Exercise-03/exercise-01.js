function flattenNestedArray(input) {
    let result = [];
    if(!Array.isArray(input)) return input
    for(let item of input){
        if(Array.isArray(item)){
            const nestedArray = flattenNestedArray(item);
            for(let innerItem of nestedArray) {
                result.push(innerItem)
            }
        } else {
            result.push(item)
        }
    }
    return result ;
}
const arr = [1, [2, [3, [4,[2]]]]];