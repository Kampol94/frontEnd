console.log("This is ex1.js")

document.getElementById("student_message").innerHTML = "Hi, my name is Kamil, I'm 23 years old and I'm learning Javascript"

console.log(document.getElementById("num_1").innerHTML)
console.log(document.getElementById("num_2").innerHTML)
console.log(document.getElementById("num_1").innerHTML + document.getElementById("num_2").innerHTML)

document.getElementById("result").innerHTML = (Number(document.getElementById("num_1").innerHTML) + Number(document.getElementById("num_2").innerHTML))/2 

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

console.log(phone1.length == 9)
console.log(phone2.length == 9)
console.log(phone3/10e9 > 0 && phone3/10e9 < 10)
console.log(Math.pow(32,6))

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

array.forEach(element => {
    
});

for (const iterator of object) {
    iterator
}