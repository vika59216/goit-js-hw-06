
class StringBuilder{
   #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.str = str;
     this.#value.push(value);
  }
  padStart(str) {
    this.str = str;
     this.#value.#value;
  }

  padBoth(str) {
    this.#value.#value;
    this.str = str;
     this.#value.push(value);

  }
    

  }





const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

















