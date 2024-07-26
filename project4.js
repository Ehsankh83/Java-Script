let firstname = "Ehsan"
let lastname = "khakshoor"


let fullname = firstname + " " + lastname 
console.log(fullname)

let name1 = 'ehsan khakshoor "bajgiran" '
console.log(name1)

let name2 = "ehsan khakshoor \"bajgiran\""  //backslash (\) is an escape character 
console.log(name2)                          //escape character : cancel the special meaning of anything

let name3 = "ehsan \nkhakshoor"             // \n means new line (break)
console.log(name3)                         

let name4 = "ehsan khak\tshoor"
console.log(name4)

//boolean

let bool = 5 < 4
console.log(bool);
console.log(typeof bool);

let user = null
console.log(user);
console.log(typeof user);

let something
console.log(something);
console.log(typeof something);

console.log( 5 / "babai");
console.log(typeof ( 5 / "babai"));