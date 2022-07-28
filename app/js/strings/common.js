// Base String:
// const str = "test";

// // .padStart() with argument:
// str.padStart(10, "~"); // '~~~~~~test'
// str.padEnd(10, "~"); // 'test~~~~~~'
// // .padStart() without of argument:
// str.padStart(10); // '      test'
// str.padEnd(10); // 'test      '

// Base String:
// const str = "Hello, my name is Yauhen";

// // .startsWith() using:
// str.startsWith("Hello"); // true
// str.startsWith("Hi"); // false
// // .endsWith() using:
// str.endsWith("Yauhen"); // true
// str.endsWith("Jack"); // false

// // Base String:
// const str = "Hello, my name is Yauhen";

// // The resulting string after .startsWith() is "my name is Yauhen":
// str.startsWith("my", 7); // true

// // The resulting string after .startsWith() is "my name is Yauhen":
// str.startsWith("name", 7); // false

// // The resulting string after .endsWith() is "Hello, my name":
// str.endsWith("name", 14); // true

// // The resulting string after .endsWith() is "Hello, my name":
// str.endsWith("name", 10); // false

// Base String:
const str = "    Just test string     ";

// base string after .trim():
str.trim(); // "Just test string"

// Base String:
// const str = "    Just test string     ";

// // Base string after .trimStart():
// str.trimStart(); // "Just test string     "

// // Base string after .trimEnd():
// str.trimEnd(); // "    Just test string"

// Base function:
function /* just a comment */ test() {}

// Difference between old and new versions of .toString():
// Old version:
test.toString(); // 'function test() {}'
// New version:
test.toString(); // 'function /* just a comment */ test () {}'

// Base function:
function greeting() {
  const name = "webDev";
  console.log(`hello from ${name}`);
}
// Difference between old and new versions of .toString():
// Old version:
test.toString(); //'function greeting() {\nconst name = \'webDev\'\nconsole.log(`hello from ${name} //`)\n}'
// New version:
test.toString();
/*  'function greeting() {\n' +
    "  const name = 'webDev'\n" +
    '  console.log(`hello from ${name}`)\n' +
    '}'
*/

// Symbol creation:
const mySymbol = Symbol("Symbol description");
// Define Symbol description
String(mySymbol) === "Symbol(Symbol description)"; // true

// Define Symbol description using property description:
mySymbol.description; // 'Symbol description'
mySymbol.description === "Symbol description"; // true

// If Symbol was created without description
// default value for property is 'undefined':
const myNewSymbol = Symbol();
myNewSymbol.description; // undefined

// Difference between old and new versions of .stringify():
// Old version:
JSON.stringify("\uD800"); // '"�"'
// New version:
JSON.stringify("\uD800"); // '"\\ud800"'
