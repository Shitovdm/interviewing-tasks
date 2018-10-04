
/*
 * 
 *      Собеседование для фронтенд-разработчика на JavaScript: самые лучшие вопросы.
 *      https://habr.com/company/ruvds/blog/334538/
 *      
 */

/*
 *   1. Задача: Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.
 *  
 *      isPrime(0)                          // false
 *      isPrime(1)                          // false
 *      isPrime(17)                         // true
 *      isPrime(10000000000000)             // false
 *  
 *      Решение:
 */
function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(708));


/*
 *   2. Задача: Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
 *  
 *      factorial(0)                        // 1
 *      factorial(1)                        // 1
 *      factorial(6)                        // 720
 *  
 *      Решение:
 */
function factorial(number) {
    var summ = 1;
    for (var i = 1; i <= number; i++) {
        summ *= i;
    }
    return summ;
}
console.log(factorial(6));


/*
 *   3. Задача: Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
 *  
 *      fib(0)                              // 0
 *      fib(1)                              // 1
 *      fib(10)                             // 55
 *      fib(20)                             // 6765
 *  
 *      Решение:
 */
function fib(number) {
    var arr = new Array(0, 1);
    for (var i = 2; i < number; i++) {
        arr.push(arr[i - 2] + arr[ i - 1]);
    }
    return arr[number - 1] + arr[number - 2];
}
console.log(fib(20));


/*
 *   4. Задача: Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
 *  
 *      isSorted([])                        // true
 *      isSorted([-Infinity, -5, 0, 3, 9])  // true
 *      isSorted([3, 9, -3, 10])            // false
 *  
 *      Решение:
 */
function isSorted(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isSorted([-Infinity, -5, 0, 3, 9]));


/*
 *   5. Создайте собственную реализацию функции filter().
 *  
 *      filter([1, 2, 3, 4], n => n < 3)    // [1, 2]
 *  
 *      Решение:
 */
function filter(array, condition) {
    var filterArray = new Array();
    for (var i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filterArray.push(array[i]);
        }
    }
    return filterArray;
}
console.log(filter([1, 2, 3, 4], n => n < 3));


/*
 *   6. Создайте собственную реализацию функции reduce().
 *  
 *      reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
 *  
 *      Решение:
 */
function reduce(array, condition, index) {
    var sum = 0;
    for (var i = index; i < array.length; i += 2) {
        sum += condition(array[i], array[i + 1]);
    }
    console.log(sum);
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));


/*
 *   7. Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().
 *  
 *      reverse('')                         // ''
 *      reverse('abcdef')                   // 'fedcba'
 *      
 *      Решение:
 */
function reverse(str) {
    var tmp = "";
    for (var i = str.length - 1; i >= 0; i--) {
        tmp += str[i];
    }
    return tmp;
}
console.log(reverse("abcdef"));


/*
 *   8. Создайте собственную реализацию функции indexOf() для массивов.
 *  
 *      indexOf([1, 2, 3], 1)               // 0
 *      indexOf([1, 2, 3], 4)               // -1
 *      
 *      Решение:
 */
function indexOf(array, element) {
    var position = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return position;
}
console.log(indexOf([1, 2, 3], 1));


/*
 *   9. Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, 
 *      является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
 *  
 *      isPalindrome('')                                // true
 *      isPalindrome('abcdcba')                         // true
 *      isPalindrome('abcd')                            // false
 *      isPalindrome('A man a plan a canal Panama')     // true
 *      
 *      Решение:
 */
function isPalindrome(string){
    string = string.split(' ').join('').toLowerCase();
    let mL = Math.floor(string.length / 2); // mL - middleLetter;

    for (let i = 0, j = string.length - 1; i < mL; i++, j--) {
        if (string[j] === string[i]) {
            continue;
        }
        else return false;
    }
    return true;
}
console.log(isPalindrome('A man a plan a canal Panama'));



/*  
 *  10. Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, 
 *      числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. 
 *      Там может быть либо одно отсутствующее число, либо их может не быть вовсе.
 *      Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть одна хорошая формула, которой вы можете воспользоваться.
 *  
 *      missing([])                         // undefined
 *      missing([1, 4, 3])                  // 2
 *      missing([2, 3, 4])                  // 1
 *      missing([5, 1, 4, 2])               // 3
 *      missing([1, 2, 3, 4])               // undefined
 *      
 *      Решение:
 *      Формула суммы арифмитической прогрессии: ((n * n) + n)/2;
 */
function missing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr.indexOf(i) == -1) return i;
    }
    return undefined;

    /*Использовать эту функцию если в переданном массиве несколько пропущенных цифр.

    var arrMissed = [],
    maxNum = arr.sort((a,b) => b-a)[0];
    for (let i = 1; i < maxNum; i++) {
        if (arr.indexOf(i) == -1) arrMissed.push(i);
    }
    return arrMissed;*/
}
console.log(missing([5, 1, 4, 2]));



/*  
 *  11. Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.
 *  
 *      isBalanced('}{')                      // false
 *      isBalanced('{{}')                     // false
 *      isBalanced('{}{}')                    // true
 *      isBalanced('foo { bar { baz } boo }') // true
 *      isBalanced('foo { bar { baz }')       // false
 *      isBalanced('foo { bar } }')           // false
 *      
 *      Решение:
 */
function isBalanced(string) {
    var leftBracket = 0;
    var rightBracket = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "{") {
            leftBracket++;
        }
        if (string[i] === "}") {
            rightBracket++;
        }
        if (rightBracket > leftBracket) {
            return false;
        }
    }
    if (leftBracket === rightBracket) {
        return true;
    }
    return false;
}
console.log(isBalanced('foo { }bar { baz }'));
