/*
 * @Date: 2023-04-10 12:14:16
 * @Author: Fancyicookie
 */
var str = 'bcdaaade8**&&&%$ddd'

// test
re1 = /b/
re2 = /f/
var b1 = re1.test(str)
var b2 = re2.test(str)
console.log(b1); // true
console.log(b2); // false


// search
// var n = str.search(re1) // 2
var n = str.search(re2) // -1

// replace /a/ 只会替换第一个字符a
// replace /a/g 会替换所有字符a
var str1 = 'abcadeafgaaad^^**add'
var re3 = /a/
var re4 = /a/g

var str3 = str1.replace(re3,'o')
var str4 = str1.replace(re4,'o')
console.log(str3); // obcadeafgaaad^^**add
console.log(str4); // obcodeofgoood^^**odd

var test = 'a_bc_de'
var reg = /_[a-z]/g
var test1 = test.replace(reg, '*')
var test2 = test.replace(/_([a-z])/g, ($1,$2) => $2.toUpperCase())
// 加了括号之后，_为$1, [a-z]为$2
console.log(test1);
console.log(test2);

// exec
var str3 = "dgfhfgh254bhku289fgdhdy675";
var reg3 = /\d+/g;
console.log(reg3.exec(str3));
// [
//     '254',
//     index: 7,
//     input: 'dgfhfgh254bhku289fgdhdy675',
//     groups: undefined
// ]

// match
var str="dgfhfgh254bhku289fgdhdy675";
var re=/\d+/g;
console.log(str.match(re)); // [ '254', '289', '675' ]