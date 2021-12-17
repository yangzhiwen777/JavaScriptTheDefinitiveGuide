/**
 * 属性测试
 * 
 * in 操作符 要求左边是一个属性名，右边是一个对象，如果对象有包含相应名字的自有属性或继承属性，将返回true （可枚举）
 * 
 * hasOwnProperty() 方法，用于测试对象是否有给定名字的属性，对继承的属性返回 false
 * 
 * propertyIsEnumerable()方法细化了hasOwnProperty()方法， 如果该属性是自有属性且这个属性的 enumerable特性为true，这个方法会返回true
 */