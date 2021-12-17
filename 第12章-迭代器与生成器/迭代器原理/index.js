// const person = ["章三", "莉丝", "王武"];
// console.log(person);
// console.log(person[Symbol.iterator]());
// const iterator = person[Symbol.iterator]();
// console.log(...iterator);
// for (let result = iterator.next(); !result.done; result = iterator.next()) {
//   console.log(result);
//   console.log(result.value);
// }

/**
 * Range类
 */

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  has(val) {
    return val >= this.from && val <= this.to;
  }

  toString() {
    return `${this.from}-${this.to}`;
  }

  // 迭代器
  [Symbol.iterator]() {
    let nextVal = this.from;
    let last = this.to;
    // 返回迭代器对象
    return {
      abc: "123,",
      // 迭代器对象 有一个 next 方法
      next() {
        // next方法返回 一个 done属性和value属性
        return {
          done: nextVal > last ? true : false,
          value: nextVal <= last ? nextVal++ : undefined,
        };
      },
      return() {
        console.log("提前退出");
        return {};
      },
      // 迭代器对象本身也可以迭代
      [Symbol.iterator]() {
        console.log(this);
        return this;
      },
    };
  }

  // 生成器
  [Symbol.iterator]() {
  }
}

const range = new Range(1, 10);
console.log(range);
console.log(range.has(1231));
console.log(range.has(10));
console.log(range.toString());
// }
const iterator = range[Symbol.iterator]();
console.log(iterator);
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  if (result.value === 5) {
    break;
  }
  console.log(result.value);
  console.log(result);
}
