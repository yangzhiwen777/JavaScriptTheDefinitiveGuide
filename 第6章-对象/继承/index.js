/**
 * 属性赋值 会查询原型链只为确定是否允许赋值
 * 注意：
 * 如果o继承了一个名为x的只读属性，则不允许赋值，不过，如果允许赋值，则只会在原始对象上创建或者设置属性，而不会修改原型链中的对象
 * 查询属性时会用到原型链，而设置属性时不影响原型链是一个重要的js特性
 * 
 * 属性赋值要么失败要么在原始对象上创建或设置属性的规则有一个例外。
 *      如果o继承了属性x，而该属性是一个通过设置方法定义的访问器属性，那么就会调用，该设置方法而不会在o上创建新的属性x，要注意，会在对象o上而不是
 * 在定义该属性的原型对象上掉用设置方法。以你如果这个设置方法定义了别的属性，那也会在o上定义同样的属性，但容然不会修改原型链
 */

const obj = {};
console.log(obj);
Object.defineProperty(obj, "name", {
  value: "yzw",
  configurable: false,
});
console.log(obj);

const newObj = Object.create(obj);
newObj.age = 18;
newObj.name = "杨志文"; // 赋值失败
console.log(newObj.name);
console.log(newObj);
