/**
 * 通过 var 关键词 声明的
 *  变量提升
 *  实现为全局对象的属性
 *  不可删除
 *
 *
 * 未经关键字 var let const 声明的变量
 *  全局变量，可以删除
 */


// 不可删除
var abc = "abc";
console.log(window);
delete window.abc;
console.log(window);

function fn() {
  // 可以删除
  a = "a";
}
fn()
delete window.a;

console.log(window);

