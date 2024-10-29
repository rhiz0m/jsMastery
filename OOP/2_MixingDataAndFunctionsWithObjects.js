/* Area of right triangle */
function getTriangleArea(a, b) {
  return (a * b) / 2
}

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2)
}

console.log(getTriangleArea(3, 4))
console.log(getTriangleHypotenuse(3, 4))

let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return this.a + this.b / 2
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** this.b)
  },
}

console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

// Overriding values of a and b
myTri.a = 12
myTri.b = 4

console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

/*

Notes

this.a and this.b is reffered to the object itself. So in myTri
that would be a = 3 and b = 4 (...before mutating it)

*/