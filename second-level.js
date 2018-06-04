
/*
 * 
 *  Собеседование для фронтенд-разработчика на JavaScript: самые лучшие вопросы.
 *  https://habr.com/company/ruvds/blog/334538/
 *  
 */


/*
 *   1. Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.
 *  
 *      fib2(0)                               // 0
 *      fib2(1)                               // 1
 *      fib2(10)                              // 55
 *      fib2(50)                              // 12586269025
 *  
 *      Решение:
 */

function fib2(number) {
    var memory = new Array(0, 1);
    for (var i = 2; i < number; i++) {
        memory.push(memory[i - 2] + memory[ i - 1]);
    }
    return memory[number - 1] + memory[number - 2];
}
console.log(fib2(50));

/*
 *    2. Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced() из предыдущей группы заданий, 
 *       но поддерживает три типа скобок: фигурные {}, квадратные [], и круглые (). 
 *       При передаче функции строки, в которой имеются неправильные скобочные последовательности, функция должна возвращать false.
 *  
 *       isBalanced2('(foo { bar (baz) [boo] })') // true
 *       isBalanced2('foo { bar { baz }')         // false
 *       isBalanced2('foo { (bar [baz] } )')      // false
 *  
 *       Решение:
 */

function isBalanced2(string) {
    var brace = {left: 0, right: 0};          //  Фигурная скобка.
    var parenthesis = {left: 0, right: 0};    //  Круглая скобка.
    var square_bracket = {left: 0, right: 0}; //  Квадратная скобка.
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "(":
                parenthesis.left++;
                break;
            case "{":
                brace.left++;
                break;
            case "[":
                square_bracket.left++;
                break;
            case ")":
                parenthesis.right++;
                break;
            case "}":
                brace.right++;
                break;
            case "]":
                square_bracket.right++;
                break;
        }
        if (parenthesis.right > parenthesis.left || square_bracket.right > square_bracket.left || brace.right > brace.left) {
            return false;
        }
    }
    if (parenthesis.right === parenthesis.left && square_bracket.right === square_bracket.left && brace.right === brace.left) {
        return true;
    }
    return false;
}
console.log(isBalanced2('(foo { bar (baz) [boo] })'));


/*
 *   3. Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём. 
 *      Может ли функция решить эту задачу за время O(N)?
 *  
 *      uniq([])                              // []
 *      uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]
 *  
 *      Решение:
 */

//  Вариант 1, не соблюдается O(N):
function uniq(array) {
    var uniqArr = new Array();
    uniqArr.push(array[0]);
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < uniqArr.length; j++) {
            if (uniqArr[j] === array[i]) {
                break;
            } else {
                if (j === uniqArr.length - 1) {
                    uniqArr.push(array[i]);
                }
            }
        }
    }
    return uniqArr;
}

//  Вариант 2 за O(N):
function uniq(array) {
    return array.filter((value, index, self) => self.indexOf(value) === index);
}

//  Вариант 3:
function uniq(array) {
    return [...new Set(array)];
}

console.log(uniq([1, 4, 2, 2, 3, 4, 8]));


/*
 *   4. Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение. 
 *      Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов?
 *  
 *      intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
 *      intersection([1, 5, 4, 2], [7, 12])             // []
 *  
 *      Решение:
 */

//  Вариант 1:
function intersection(array, _array) {
    var newArr = new Array();
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < _array.length; j++) {
            if (_array[j] === array[i]) {
                newArr.push(array[i]);
                break;
            }
        }
    }
    return newArr;
}

//  Вариант 2:
function intersection(array, _array) {
    return array.filter(function (n) {
        return _array.indexOf(n) !== -1;
    });
}
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));



/*
 *   5. Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).
 *  
 *      sort([])                              // []
 *      sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]
 *  
 *      Решение:
 */

//  Вариант 1 (O(N×log(N) не соблюдается):
function sort(array) {
    var tmp = Infinity, tmpIndex = 0, len = array.length;
    var sortArr = new Array();
    for (var j = 0; j < len; j++) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] <= tmp) {
                tmp = array[i];
                tmpIndex = i;
                sortArr.push();
            }
            if (i === array.length - 1) {
                sortArr.push(tmp);
                tmp = Infinity;
                array.splice(tmpIndex, 1);
            }
        }
    }

    return sortArr;
}

//  Вариант 2 (Алгоритм быстрой сортировки Хоара), O(N×log(N) соблюдается:
function sorte(items) {
    var index, tmp, i = 0, j = items.length - 1;
    var pivot = items[ Math.floor(((items.length - 1) + 0) / 2) ];
    if (items.length > 1) {
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                tmp = items[i];
                items[i] = items[j];
                items[j] = tmp;
                i++;
                j--;
            }
        }
    }
    return items;
}

console.log(sorte([-4, 1, Infinity, 3, 3, 0]));


/*
 *   6. Реализуйте функцию includes(), которая возвращает true или false в зависимости от того, 
 *      встречается ли переданное ей число в переданном ей отсортированном массиве. 
 *      Может ли функция решить эту задачу за время O(log(N))?
 *  
 *      includes([1, 3, 8, 10], 8)            // true
 *      includes([1, 3, 8, 8, 15], 15)        // true
 *      includes([1, 3, 8, 10, 15], 9)        // false
 *  
 *      Решение:
 */

//     Вариант 1 (Очень простой):
function includes(array, number) {
    return array.indexOf(number) !== -1;
}

//     Вариант 2 (Очень простой).
function includes(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }
    return false;
}

console.log(includes([1, 3, 8, 8, 15], 15));


/*
 *   7. Реализуйте функцию assignDeep(), которая похожа на Object.assign(), но выполняет глубокое объединение объектов. 
 *      Для того, чтобы не усложнять задачу, можно исходить из допущения, 
 *      что объекты могут содержать только числа и другие объекты (в них не может быть массивов, строк, и так далее).
 *  
 *      assignDeep({ a: 1 }, {})              // { a: 1 }
 *      assignDeep({ a: 1 }, { a: 2 })        // { a: 2 }
 *      assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
 *      assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })    // { a: { b: { c: 1, d: 2 }}, e: 3 }
 *  
 *      Решение:
 */

function assignDeep(obj2, obj1) {
    var tmp = obj2;
    for (var param in obj1) {
        if (obj1.hasOwnProperty(param)) {
            if (typeof (obj1[param]) === "object") {
                nesting.push(param);
                assignDeep(obj2, obj1[param]);
            } else {
                for (var j = 0; j < nesting.length; j++) {
                    tmp = tmp[nesting[j]];
                }
                tmp[param] = obj1[param];
                obj2 = tmp;
                nesting.splice(0, nesting.length);
            }
        }
    }
    return obj2;
}
let nesting = new Array();
console.log(assignDeep({a: {b: {c: 1}}}, {a: {b: {d: 2}}, e: 3}));


/*
 *   8. Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых заданий, 
 *      но работает с функциями, возвращающими promise-объекты, каждый из которых должен быть разрешён до перехода к следующему.
 *  
 *      let a = () => Promise.resolve('a')
 *      let b = () => Promise.resolve('b')
 *      let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
 *      await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])    // ['a', 'b', 'c']
 *      await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']) // ['d', 'a', 'c', 'b']
 *  
 *      Решение:
 */

function reduceAsync(func_arr, func, elem) {
    var acc = new Array();
    (func_arr[0])()
            .then((val) => {
                acc.push(val);
                (func_arr[1])()
                        .then((val) => {
                            acc.push(val);
                            (func_arr[2])()
                                    .then((val) => {
                                        acc.push(val);
                                        console.log(func(acc, ...elem));
                                    });
                        });
            });
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));
reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']);


/*
 *   9. Реализуйте функцию seq(), пользуясь тем же подходом, что и при работе над функцией reduceAsync(). 
 *      Эта функция должна принимать массив функций, которые возвращают promise-объекты, и разрешать их один за другим.
 *  
 *      let a = () => Promise.resolve('a')
 *      let b = () => Promise.resolve('b')
 *      let c = () => Promise.resolve('c')
 *      await seq([a, b, c])                  // ['a', 'b', 'c']
 *      await seq([a, c, b])                  // ['a', 'c', 'b']
 *  
 *      Решение:
 */

function seq(func_arr, func, elem) {
    var acc = new Array();
    (func_arr[0])()
            .then((val) => {
                acc.push(val);
                (func_arr[1])()
                        .then((val) => {
                            acc.push(val);
                            (func_arr[2])()
                                    .then((val) => {
                                        acc.push(val);
                                        console.log(acc);
                                    });
                        });
            });
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => Promise.resolve('c');
seq([a, c, b]);
