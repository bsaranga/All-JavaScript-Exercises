// The 'hint' parameter takes either 'string', 'number' or 'default'

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`)
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// Learn why Symbol.toPrimitive is useful?

console.log(String(user));
console.log(Number(user));
console.log(Number(user)+500);

// Old method

let user2 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

console.log(String(user2));
console.log(Number(user2));
console.log(Number(user2)+500);

// These methods can be used as a catch-all method


let user3 = {
  name: "John",
  money: 1000,

  // leaving only toString() converts the object to the string representation in all cases
  toString() {
    return `{name: "${this.name}"}`;
  },

 };