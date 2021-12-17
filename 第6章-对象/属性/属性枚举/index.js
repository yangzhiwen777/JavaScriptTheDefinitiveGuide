/**
 * 属性枚举
 * 
 * in 指定对象的每个可枚举 自有属性或继承属性
 * 
 * Object.keys()  返回对象可枚举自有属性名的数组。 不包括 不可枚举属性，继承属性， 名字是符号的属性
 * 
 * Object.getOwnPropertySymbols() 返回名字是符号的自有属性 无论是否可枚举
 * 
 * Object.getOwnPropertyNames() 与 Object.keys()类似，但也会返回不可枚举的自有属性，只要他们的名字是字符串
 * 
 * Reflect.ownKeys() 返回所有属性名 包括可枚举属性与不可枚举属性，以及字符串和符号属性
 */