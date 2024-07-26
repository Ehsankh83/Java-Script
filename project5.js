let num = String(6)
console.log(num , typeof num)

let num2 = Number(6)
console.log(num2 , typeof num2)

let x 
console.log(x , typeof x)

x = 8 
console.log(x , typeof x)

x = x + ""
console.log(x , typeof x)

x = x - 2
console.log(x , typeof x)

x = !x                              // bcz x is a number and every number in boolean is true . 
console.log(x , typeof x)           //so x is true ,opposite of true false

console.log(Boolean(7))             //every number in boolean will give u true except 0 , but why every number is true ?

console.log(Boolean(6))

console.log(Boolean(1))

console.log(Boolean(-7))

console.log(Boolean(-183471834))

console.log(Boolean(19837478))

console.log(Boolean(0))             //the actual implementation of boolean is this : 1=true & 0=false
                                    //falsy things : 0 , null , undefined
console.log(null)
console.log(Boolean(null))          //null is also false in boolean


x = x + 2                           // x is a false so it says: "its a false result and we are summing it with a number , i have to use the number result of false whitch is 0" as a number its 0  pluse 2 = 2
console.log(x , typeof x)

let y
console.log(y , typeof y)

y = 8
console.log(y , typeof y)

y = y + ""
console.log(y , typeof y)

y = y + 2                           
console.log(y , typeof y)      

y = 8
y = +y + 2                          //and now if u add (+)behind the y , it will convert the string y into number 
console.log(y , typeof y)  

y=String(8)
y=y+2
console.log(y , typeof y)  

y=true
y=y+2                               //why is it 3 !?!?!?!?!?!??!?! now im geting mad 
console.log(y , typeof y)           //true counts as 1 !?!?!?!?!?!!??!?!/

y=false
y=y+2                            //so yeah false = 0 and true = 1
console.log(y , typeof y)       //im not mad anymore

let z = "123 Ehsan"
console.log(z , typeof z)

z = Number("123 Ehsan")
console.log(z , typeof z)

z = parseInt("Ehsan 123 Ehsan")
console.log(z , typeof z)

z = parseInt("123 Ehsan")       //make sure u have number at the start
console.log(z , typeof z)