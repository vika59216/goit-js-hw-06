
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
     this.values.push(value);
  }
  padStart(str) {
    this.str = str;
     this.values.(value);
  }

  padBoth(str) {
    this.values.(value);
    this.str = str;
     this.values.push(value);

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

















