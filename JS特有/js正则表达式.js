/*
 * @Date: 2023-04-10 12:14:16
 * @Author: Fancyicookie
 */
var str = 'bcdaaade8**&&&%$ddd'
var n = str.search(/d/)
// console.log(n)

var re1 = /a/
var re2 = /a/g

// replace /a/ 只会替换第一个字符a
// replace /a/g 会替换所有字符a

var str1 = str.replace(re1,'o')
var str2 = str.replace(re2,'o')
// console.log(str1);
// console.log(str2);

var test = 'a_bc_de'
var reg = /_[a-z]/g
var test1 = test.replace(reg, '*')
var test2 = test.replace(/_([a-z])/g, ($1,$2) => $2.toUpperCase())
// 加了括号之后，_为$1, [a-z]为$2
// console.log(test1);
console.log(test2);

// var str3="dgfhfgh254bhku289fgdhdy675";
// var reg3=/\d+/g;
// console.log(reg3.exec(str3));