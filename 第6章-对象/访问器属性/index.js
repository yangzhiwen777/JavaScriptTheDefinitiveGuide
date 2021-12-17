const obj = {
  _a: "a",
  b: "b",
  get a() {
    return this._a;
  },
  set a(val) {
    this._a = val;
  },
};
console.log(obj);
console.log(obj.a);
obj.a = 1000
console.log(obj);
