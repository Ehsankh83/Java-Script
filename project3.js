let data = 9            //number
let user = "Ehsan"      //string

//data type = Primitive & Object

//Primitive = number & string & boolean & null & undefined & symbol

//Object = anything that is not a Primitive

let num1 = 178346173213
console.log (num1 * 25)

let num2 = 165346.4
console.log (num2)

console.log (typeof data , typeof user , typeof num1 , typeof num2);

let num3 = 0xf      //f=15 in hexadecimal 0x and then use 0-9 & a-f 
console.log (num3)

let num4 = 0xff     // (ff)16 = (15*16^1) + (15*16) = (255)10
console.log (num4)

let num5 = 15e12    //15*10^12
console.log (num5)

let num6 = 5/0
console.log (num6)

let num7 = -5/0
console.log (num7)

console.log (Number.MAX_VALUE);

console.log (Number.MAX_VALUE * 10);    //if u go beyond the maximum value , u get infinity
console.log (Number.MIN_VALUE / 10);    //if u go below the minimum value , u get -infinity (but it does not work !!)

let num8 = 102020202020202020202002020202020n
console.log(num8)

let num9 = 102020202020202020202002020202020n
console.log(num9 + 2n)    //num9 + 2 is gives error = (a big number + a small number)