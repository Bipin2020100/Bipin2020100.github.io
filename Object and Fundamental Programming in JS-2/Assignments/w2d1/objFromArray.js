function groupById(arr) {
    let obj = {}
    for (let value of arr) {
        obj[value.id] = value ;
    }
    return obj ;
}
let users1 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
 
let usersById = groupById(users1);
console.log(usersById)