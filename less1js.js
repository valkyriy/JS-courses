// 1)Реализовать функцию которая вернет сумму элементов произвольного массива:

function mySum(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum
}
console.log(mySum([3, 23, 26, 40, 50]));

// 2. Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать двумя способами,
//  через метод sort и через цикл for:

// 2.1)Sort
var myMass = [56, 7, 657, 0, 567, 4, 9];
function firstSort(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
myMass.sort(firstSort);
console.log(myMass);


// 2.2)For


// 3. Реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]


// 4)Реализовать функцию которая возвращает массив с числами фибоначчи, количество которых
// зависит от переданного значения при вызове функции
function fibi(n) {
    var sum = 0,i,str,arr=[];
    for (i-0; i<n; i++){
        if( arr.length > 1)  sum += arr[ arr.length-2];
        if( arr.length == 1) sum = 1;
        if( arr.length == 0) sum = 0;
arr.push( sum);
    str=arr.join(",");
    }
    }
console.log(fibi(7));
