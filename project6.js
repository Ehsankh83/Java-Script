//Arithmetic Operators

//expression1
let num1 = 2
let num2 = 4

let result1 = num2 + num1
console.log(result1)

//expression2
let num3 = 2
let num4 = 4

let result2 = num4 - num3
console.log(result2)

//expression3
let num5 = 2
let num6 = 4

let result3 = num6 / num5
console.log(result3)

//expression4
let num7 = 2
let num8 = 4

let result4 = num7 * num8
console.log(result4)

//expression5
let num9 = 2
let num10 = 5

let result5 = num10 % num9              //reminder of 5/2 = 1
console.log(result5)

//expression6
let num11 = true
let num12 = true

let result6 = num11 * num12
console.log(result6)

//expression7
let num13 = 4

num13 += 2
console.log(num13)

// expression7                      //if the number ur adding is 1 it has a special syntax
let num14 = 4                       

num14 ++                            // ++ is increment   or in this case post increment
console.log(num14)   

// expression8
let num15 = 4

num15 --                            // -- is decrement   or in this case post decrement
console.log(num15)               

// expression9
let num16 = 4

++num16                         
console.log(num16)              // pre increment
                                // 
// expression10
let num17 = 4

--num17                        //pre decrement
console.log(num17) 

// expression11
let num18 = 4

let y = num18++              //post increment : it means it will increment the value first and then it will assign the value
console.log(y, num18) 

// expression12
let num19 = 4

let x = ++num19              //pre increment : it means it will assign the value first and then it will increment the value
console.log(x, num19) 

// expression13         how to find power of a number ?
let num = 4
let result = num * num * num 
console.log(result)
//Or
let result7 = Math.pow(4,3)     //so 4 is the number and 3 is the power (the times that 4 is multiplied to itself)
console.log(result)
//OR
num = 4 
result = 4 ** 3
console.log(result)