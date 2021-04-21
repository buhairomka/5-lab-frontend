let arr = [1, 2, 3, 4, 56, 7, 8, 4, 9, 0]
//foreach
console.log('foreach')
arr.forEach((el) => console.log(el))
//filter
console.log('filter')
console.log(arr.filter(el => el < 5))
// map
console.log('map')
let arr1 = [
    [1, 2, 0, 0, 0],
    [2, 2, 0, 0, 0],
    [8, 2, 6, 0, 0],
    [2, 5, -1, -1, -2],
    [7, 3, 1, 1, 1],
    [6, 4, 6, 5, 5],
    [5, 7, 3, 3, 3]
]
let arr1res = arr1.map(sub => {
    return sub.slice(0, 2)
})
let arr1res1 = arr1.map((sub) => {
    console.log(sub)
    return sub.filter((el) => {
        return el > 0
    })
})

console.log(arr1res)
console.log(arr1res1)

//every/some
function ispos(n) {
    return n > 0
}

function isneg(n) {
    return n < 0
}

console.log('SOME')
let arr2 = [-1, 0, 2, 3, 4]
let arr3 = [0, 1, 2, 3, 4, 5]
let arr4 = [-1, -2, -3, -4, -5]

console.log('pos\n',
    arr2.some(ispos),
    arr3.some(ispos),
    arr4.some(ispos))
console.log('neg\n',
    arr2.some(isneg),
    arr3.some(isneg),
    arr4.some(isneg))

console.log('\nEVERY')
console.log('pos\n',
    arr2.every(ispos),
    arr3.every(ispos),
    arr4.every(ispos))
console.log('neg\n',
    arr2.every(isneg),
    arr3.every(isneg),
    arr4.every(isneg))

// reduce
let tostring = 'копатич не шар'
tostring = tostring.split('')

let tostring1 = tostring.reduce((prev, cur) => {
    return prev + cur
}, '')
console.log(tostring1)

// reduceRight
let tostring2 = tostring.reduceRight((prev, cur) => {
    return prev + cur
}, '')
console.log(tostring2)