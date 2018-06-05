
/*
 * 
 *  Собеседование для фронтенд-разработчика на JavaScript: самые лучшие вопросы.
 *  https://habr.com/company/ruvds/blog/334538/
 *  
 */

/*
 *   1. Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.
 *  
 *      permute('')             // []
 *      permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 *  
 *      Решение:
 */


//  Вариант через итератор:
function *permute(a, n = a.length) {
    if (n <= 1) {
        yield a.slice();
    } else {

        for (let i = 0; i < n; i++) {
            yield * permute(a, n - 1);
            const j = n % 2 ? 0 : i;
            [a[n - 1], a[j]] = [a[j], a[n - 1]];
        }
}
}

Array.from(permute("abc".split(''))).map(perm => perm.join(''));

//  Вариант через рекурсивную функцию.

function permute(string) {
    if (string.length < 2)
        return string;
    var solution = [];
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (string.indexOf(char) !== i) {
            continue;
        }
        var tmpStr = string.slice(0, i) + string.slice(i + 1, string.length);
        for (var tmpStr of permute(tmpStr)) {
            solution.push(char + tmpStr);
        }
    }
    return solution;
}
console.log(permute('abc'));



/*
 *   2. Создайте самостоятельную реализацию функции debounce().
 *  
 *      let a = () => console.log('foo');
 *      let b = debounce(a, 100);
 *      b();
 *      b();
 *      b();     // только этот вызов должен вызывать a()
 *  
 *      Решение:
 *      Пояснение: Функция откладывает вызов функции из первого аргумента на количество секунд из второго аргумента.
 */

function debounce(f, ms) {
    console.log("GO");
    let timer = null;
    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        };
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onComplete, ms);
    };
}

let a = () => console.log('foo');
let b = debounce(a, 1000);
b();
b();
b();