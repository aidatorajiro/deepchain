// ContractGenerator.js : A library for creating contract source codes

export default class ContractGenerator {
  // constructor : settings for generating source code
  // [args]
  //   - Object options
  // [returns] ContractGenerator
  constructor (options) {
    const opt = (name, type, dafault) => {
      if (typeof options[name] === type) {
        this[name] = options[name]
      } else if (typeof options[name] === 'undefined') {
        this[name] = dafault
      } else {
        throw new Error('invarid options')
      }
    }

    opt('onlyOwner', 'boolean', false)
    opt('dtype', 'string', 'int32')
  }

  // dotVecMat : generate a contract source code, which computes A dot B where A is a vector of size n and B is a matrix of shape (n, m). The output ends with a blank line.
  // [args]
  //   - Number n : the number of items of A, and also the number of rows of B
  //   - Number m : the number of columns of B
  // [returns] String
  dotVecMat (n, m) {
    if (typeof n !== 'number' || typeof m !== 'number') {
      throw new Error('invalid arguments')
    }
    return (`\
function dot_${n}_${n}x${m}(${this.dtype}[${n}] a, ${this.dtype}[${m}][${n}] b) pure private returns (${this.dtype}[${m}] c) {
  for (var i = 0; i < ${m}; i++) {
    ${this.dtype} x = 0;
    for (var j = 0; j < ${n}; j++) {
      x += a[j]*b[j][i];
    }
    c[i] = x;
  }
}
`)
  }

  // mapVec : generate a contract source code, which receives a vector and returns a vector which is mapped with the given function. The output ends with a blank line.
  // [args]
  //   - Number n : the number of items of vector.
  //   - String name : the name of mapping function.
  // [returns] String
  mapVec (n, name) {
    if (typeof n !== 'number' || typeof name !== 'string') {
      throw new Error('invalid arguments')
    }
    return (`\
function map_${name}_${n}(${this.dtype}[${n}] inp) pure private returns (${this.dtype}[${n}] out) {
  for (var i = 0; i < ${n}; i++) {
    out[i] = ${name}(inp[i]);
  }
}
`)
  }

  // relu function
  relu () {
    return (`\
function relu(${this.dtype} x) pure private returns (${this.dtype} y) {
  if (x < 0) {
    y = 0;
  } else {
    y = x;
  }
}
`)
  }
}
