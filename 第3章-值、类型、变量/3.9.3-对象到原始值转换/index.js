/**
 * 结论
 *
 * 两个比较类似的方法
 * toString()
 * valueOf()
 *
 * toString: 将返回对象的字符串表示;
 *                                             5 ==> '5'
 *                                         'abc' ==> 'abc'
 *                                     [1, 2 ,3] ==> '1,2,3'  数组的每个元素将转换为字符串，在使用逗号分隔符将它们连接起来
 *                    { name: '杨志文', age: 18 } ==> '[object Object]'
 *                                       函数     ==>  '源码的字符串表示'
 *
 *           这种 { } 对象除外，它将表示为 '[object Object]' 这个字符串
 *
 *
 * valueOf: 大体可以认为把对象转换为代表对象的原始值 默认情况下 返回对象本身 (数据类型 log打印的表现形式)
 */

/**
 * js规范 定义了对象到原始值转换的三种算法
 * 
 * 1. 偏字符串
 *      该算法返回原始值，而且只要可能就返回字符串
 * 
 * 2. 偏数值
 *      该算法返回原始值，而且只要可能就返回数值
 * 
 * 3. 无偏好
 *      该算法不倾向于任何原始值类型，而是由类定义自己的转换规则
 *      js内置类型除了Date类都实现了偏数值算法，Date类实现了偏字符串算法
 * 
 */


/**
 * 对象到原始值的转换算法
 * 
 * 解释完 toString() 和 valueOf() 方法后，现在我们可以大致地解释 对象到原始值的算法实现
 * 
 * 1. 偏字符串算法首先尝试 toString()方法，如果这个方法有定义并且返回原始值，则js使用该原始值(即使这个值不是字符串)，如果toString()不存在或者存在但是返回对象，
 *    则js尝试使用valueOf()方法，如果这个方法存在且返回原始值，则使用该值，否则转换失败，报错
 * 
 * 2. 偏数值算法与偏字符串方法类似，只不过先尝试 valueOf()方法，在尝试toString()方法
 * 
 * 3. 无偏好算法取决于被转换对象的类，如果是一个Date对象，则js使用偏字符串算法，如果是其他类型的对象，则使用偏数值算法。
 * 
 *  事例：
 *      Number([]) ==> 0
 *      Number([99]) ==> 99
 * 
 *      对象到数值的转换首先使用偏数值的算法把对象转换为一个原始值，然后再把得到的原始值转换为数值。
 *      偏数值算法先尝试使用 valueOf()方法，将toString()作为备用，Array类继承了默认的 valueOf()方法，该方法不返回原始值，因此在尝试数组转换为数值时，
 *      最终会掉用 toString() 方法。 空数组转换为空字符串，而空字符串转换为 数值0。只有一个元素的数组，转换为该元素对应的字符串。如果一个数组只包含一个数值，则该数值先转换为字符串，在转换为数值
 */

const bool = new Boolean(true);
console.log(bool);
console.log(bool.toString());
console.log(bool.valueOf());

const string = new String("asd");
console.log(string);
console.log(string.toString());
console.log(string.valueOf());

const string2 = new String([
  1,
  2,
  [32131],
  { name: "sda" },
  3,
  (a) => {
    return a;
  },
]);
console.log(string2);
console.log(string2.toString());
console.log(string2.valueOf());

const num = new Number(321321312);
console.log(num);
console.log(num.toString());
console.log(num.valueOf());

const arr = [
  1,
  2,
  [32131],
  { name: "sda" },
  3,
  (a) => {
    return a;
  },
];
console.log(arr);
console.log(arr.toString());
console.log(arr.valueOf());

function fn() {
  console.log(1231);
}
console.log(fn);
console.log(fn.toString());
console.log(fn.valueOf());

const obj = {
  name: "杨志文",
  age: 18,
  likes: ["苹果", "香蕉"],
};
console.log(obj);
console.log(obj.toString());
console.log(obj.valueOf());

console.log(Number([1])); // 1
console.log(Number('1,2,3')); // NaN
console.log(parseInt('1,2,3')); // 1
console.log(Number('')); // 0
console.log(Number(['bbc'])); // NaN
