
const age2 = 18;
const age3 = 60;

const checkAge = function(age) {
if(age && !isNaN(age)) {
  if (age < age2) {
     alert("You don’t have access cause your age is" + age + "It’s less then");
  } else if (age >= age2 && age < age3) {
     alert("Welcome !");
  } else if (age > age3) { 
     alert("Keep calm and look Culture channel");
  } else {
     alert("Technical work");
  }
} else alert('Not an integer value')
}
let a = prompt('Enter your age')

checkAge(a)