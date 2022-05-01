// primitive data type
// strings;
// let val;

// val = 'molatech';
// val = 24;
// val = true;
// val = null;
// val = 
// console.log(typeof(val));

//  
 
// const number = [23,45,63,78,45,24,15,2,7,9,8];
// let val;

// val = number.sort(function(x,y){
//   return x - y;
// });

// function firstNum(number){
//   return number < 50;
// }

// val =  number.find(firstNum);
// console.log(number);
// console.log(typeof(number));
// console.log(val);

//  OBJECT LITERALS 
let val

// const company = {
//   companyName: 'Molatech Computer Infotech',
//   CEO: 'Miracle Olakunle',
//   content: ['Web graphics', 'Web animation', 'css', 'sass'],
//   theme: 'Learn and design website for your business',
//   duration: 'seven days of training'
// }

const person = {
  firstName: 'Olakunle',
  lastName: 'Miracle',
  age: 23,
  occupation: 'Student',
  address: {
    residence: 'N0 2. Oke D-O Modakeke',
    str:'Oke D-O',
    city: 'Modakeke',
    state: 'State Of Osun',
  },
  qualification: 'ND holder',
  hobbies: ['coding', 'tutorial', 'business', 'hustling'],
  getBirthyear: function(){
   return  new Date().getFullYear() - this.age;
  }
} 

// val = company;
// val = company.companyName;
// val = company.content;
// // const preDate = Date('year');

// val = person;
// val = person.getBirthyear();
// console.log(val);

// DATE

// val = new Date(2020, 07, 06, 21, 21);
// val = new Date();
val = person.getBirthyear();
 
  const date = new Date();

val = date.getFullYear();
val = date.getMonth();
val = date.getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
val = days[date.getDay()];

const years = ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

// val = years[date.getMonth()];

if(date.getFullYear() === 2020){
  console.log('This Month is ' + years[date.getMonth()]);
}else{
  console.log('err');
}


  // CONDITIONALS
if(new Date().getHours() <= 06){
  console.log('Good Morning')
}else if(new Date().getHours() <= 12){
  console.log('Good Afternoon');
}else if(new Date().getHours() <= 18){
  console.log('Good Evening')
}else if(new Date().getHours() > 18){
  console.log('Good night have a nice dream')
}else(
  console.log('It is dawn')
)

switch(date.getFullYear()){
  case 2018:
    console.log('Welcome to 2018')
    break;

    case 2019:
      console.log('Welcome to 2019')
      break;

      case 2020:
        console.log('Welcome to 2020')
        break;

        default:
          console.log('Invalid year');
}
console.log(new Date().getHours());

// FUNCTION DECLARATION AND EXPRESSION
function greet(name){
  if(new Date().getHours() <= 6){
    return `Hello ${name} today is ${new Date().toDateString()} ${date.getHours()} ${new Date().getUTCMinutes()}} ${new Date().getUTCSeconds()}`; 
  }else{
    return ('err');
  }
}

console.log(greet('Olakunle'));


//  SELF INVOKING FUNCTION
 (function(x){
   console.log( x*x )
 })(3);

document.getElementById('time').addEventListener('click', displayTime);
// document.getElementById('get_min').addEventListener('click', displayMin);
// document.getElementById('get_day').addEventListener('click', displayDay);
// document.getElementById('get_sec').addEventListener('click', displaySec);
      

function displayTime(){
      document.getElementById('get_hour').innerHTML = new Date().getHours();
      document.getElementById('get_min').innerHTML = new Date().getMinutes();
      document.getElementById('get_day').innerHTML = new Date().toDateString();
      document.getElementById('get_sec').innerHTML = new Date().getSeconds();
      document.querySelector('div.flex').style.display = "block";

}


