let arr = [5, 7, 235, 0, 43242, 2, 1, null, 0, 0, 0, "sdadsadas", "sdasdadas"];

let oddCount = 0;
let evenCount = 0;
let zeroCount = 0;

function getCount() {
    arr.forEach(function(item) {
        if (item == null || typeof(item) == "string")  return false
        if (item == 0) zeroCount++
        else if (item % 2 !== 0) oddCount++
        else if (item % 2 == 0)  evenCount++
    });
    return console.log(`Четных чисел : ${evenCount}, нечетных : ${oddCount} и нулей : ${zeroCount}` )       
};    

getCount();