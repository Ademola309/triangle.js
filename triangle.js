const side1 = 90
const side2 = 90
const side3 = 90

if (side1 === side2 && side3 === side1 && side2 === side3){
    console.log("Equilateral triangle")
}
else if (side1 === side2 || side1 === side3 || side2 === side3){
    console.log("Isosceles triangle")
}
else{
    console.log("Scelene triangle")
}