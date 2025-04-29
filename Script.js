
let people = [
    { name: "Anna", age: 19 },
    { name: "Ivan", age: 25 },
    { name: "Georgi", age: 16 }
];

let a = [1, [2, 3], 4];
let b = [1, [2, 3], 4];
let c = [1, [2, 4], 4];

function filterByValue(arr, minAge) {
    return arr.filter(person => person.age >= minAge);
}
  
function deepArrayEqual(arr1, arr2) {
   
    if (arr1.length !== arr2.length) return false;
  
    for (let i = 0; i < arr1.length; i++) {
      let val1 = arr1[i];
      let val2 = arr2[i];
  
      if (Array.isArray(val1) && Array.isArray(val2)) {
        if (!deepArrayEqual(val1, val2)) return false;
      } else if (val1 !== val2) {
        return false;
      }
    }
  
    return true;
}

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); 
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
}


console.log("zadacha 1 (find adults from input array of objects):");
console.log("input: ", people)
console.log("output: ", filterByValue(people, 18))

console.log("\n\nzadacha 2 (return string in format DD.MM.YYYY from input date object): ")
console.log("input: ", new Date(2025, 3, 9));
console.log("output: ", formatDate(new Date(2025, 3, 9)));

console.log("\n\nzadacha 3 (deep aray search input requires 2 arrays): ");
console.log("comparing a: ",a," and b: ",b," returns: ");
console.log(deepArrayEqual(a, b));
console.log("comparing a: ",a," and c: ",c," returns: "); 
console.log(deepArrayEqual(a, c));