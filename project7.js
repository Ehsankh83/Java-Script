//Relational Operators
console.log(5 > 6);                     //when u compare the result will be in boolean format
console.log(7 > 6);

let data = 7 > 6                        // data is in boolean format and the value is true
console.log(data);

data = 4 >= 4
console.log(data);

data = 4 <= 4
console.log(data);
//compare two values

let x = 5
let y = 5

data = x <= y
console.log(data);

//what about string ?

//example 1
x = "Pen"
y = "Book"

data = x <= y
console.log(data);

//example 2
x = "Pen"
y = "Book"

data = x >= y
console.log(data);

//example 3
x = "Pen"
y = "Book"

data = x > y
console.log(data);

//example 4
x = "Pen"
y = "Book"

data = x < y
console.log(data);
// every character has unique number (Ascii Values) for example capital a is 65 or maybe capital z is 91

x="pen"
y="peNcil"
data= x>y
console.log(data);

//now a number and a string 

//example 1
x="2"
y=1
data= x>y                   //in tis case the string 2 will be converted into number so its true
console.log(data);

//example 2
x=3
y=3
data= x==y                  // = means Assignment in JS so if u wanna see two number are equal u can use ==
console.log(data);

//example 3
x="3"       
y=3
data= x==y                //its true but shouldn't it check the types ? yes if u want JS to check the types as well you should use === 
console.log(data);

//example 4
x="3"       
y=3
data= x===y             //never use == . always use === 
console.log(data);

//what about other types ?

//example 1
x=''                //empty string is false
y = false
data= x == y          
console.log(data);

x=''
y = false
data= x === y          
console.log(data);

