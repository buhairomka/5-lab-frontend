'use strict'
//es5
let Class = function (num1, num2) {
    this.n1 = num1;
    this.n2 = num2;
}
Class.prototype.sum = function () {
    return this.n1 + this.n2;
}
Class.prototype.info = function () {
    return 'sum of 2 numbers'
}

let spl1 = new Class(3, 4)
let spl2 = new Class(9, 'scs')

console.log(spl1.sum())
console.log(spl1.info())
console.log(spl2.sum())

let Class2 = function (num1, num2, num3) {
    Class.call(this, num1, num2)
    this.n3 = num3
    let temp = 993
    this.get_t = () => temp
    this.set_t = v => {
        temp = v
        return 't is ' + this.get_t()
    }
}

Class2.prototype = Object.create(Class.prototype)
Class2.prototype.constructor = Class2
Class2.prototype.info = function () {
    return 'sum of 3 numbers'
}
Class2.prototype.sum = function () {
    return this.n1 + this.n2 + this.n3;
}

let spl3 = new Class2(5, 6, 1)
let spl4 = new Class2(9, 7, 2)
console.log(spl3.info())
console.log(spl3.sum())

console.log(spl3.get_t())
console.log(spl3.set_t(6))

console.log(spl4.get_t())
console.log(spl3.get_t())

//es6

class A {
    static #__localVar = 'static secret key'
    #_localVar = 'local secret key'

    constructor(a, b, c, d) {
        this._a = a
        this._b = b
        this._c = c
        this._d = d
    }

    get LocalVar() {
        return this.#_localVar
    }

    get LocalStatickVar() {
        return A.#__localVar
    }

    set setLocalVar(par) {
        this.#_localVar = par
    }

    concatenate() {
        return this._a + this._b + this._c + this._d
    }
}

let a1 = new A(1, 2, 0, 4)

console.log(a1.concatenate())
console.log(a1._localVar)
console.log(a1.__localVar)
console.log(A.__localVar);
console.log(a1.LocalStatickVar);
console.log(a1.LocalVar);


class B extends A {
    constructor(a, b, c, d, e) {
        super(a, b, c, d);
        this._e = e
    }

    concatenate() {
        return this._a + this._b + this._c + this._d + this._e
    }
}

let b1 = new B(1, 2, 3, 4, 5)
console.log(b1.concatenate())