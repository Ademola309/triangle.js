// const side1 = 90
// const side2 = 90
// const side3 = 90

// if (side1 === side2 && side3 === side1 && side2 === side3){
//     console.log("Equilateral triangle")
// }
// else if (side1 === side2 || side1 === side3 || side2 === side3){
//     console.log("Isosceles triangle")
// }
// else{
//     console.log("Scelene triangle")
// }

const day = "Sunday"

// if (day === "Thursday"){
//     console.log("Go to work!")
// }
// else if (day ==="Friday"){
//     console.log("TGIF!")
// }
// else if (day === "Saturday"){
//     console.log("Go to owanbe!")
// }
// else{
//     console.log("Go to church")
// }

switch (day){
    case 'Friday':
        console.log("TGIF!")
        // break
    case 'Saturday':
        console.log("Go to owanbe")
        // break
    case 'Sunday' :
        console.log("Go to church")
        // break
    default:
        console.log('I love you')
}