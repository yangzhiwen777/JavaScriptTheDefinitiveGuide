function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
  yield 99;
}

let primes = oneDigitPrimes();
// 生成器有 Symbol.iterator 方法 因此也是可迭代的对象
let iterator = primes[Symbol.iterator]();
console.log(iterator);
console.log(primes);
// console.log([...primes]);
for (let key of primes) {
  console.log(key);
}
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

  // 生成器函数 让这个类的实例可迭代
  *[Symbol.iterator]() {
    for (let start = this.from; start <= this.to; start++) {
      yield start;
    }
  }
}
const range = new Range(1, 100);
console.log(range);
console.log([...range]);
