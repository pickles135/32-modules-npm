//shortcut
const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.square = square;
exports.PI = PI;
exports.add = add;

// module.exports.add = (x, y) => x + y;

// module.exports.PI = 3.14159;

// module.exports.square = x => x * x;


//clunky
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// const maths = {
//     add: add,
//     PI: PI,
//     square: square,
// };

// module.exports = maths; 