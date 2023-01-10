const numbers = [
  
    {
      earTagID: "SN21-Juliet",
      dailyEarnings: 500,
    },
    {
      earTagID: "SN21-Juliet",
      dailyEarnings: 850,
    },
    {
      earTagID: "VJ10-Brenda",
      dailyEarnings: 650,
    },
    {
      earTagID: "SN21-Juliet",
      dailyEarnings: 200,
    },
    {
      earTagID: "VJ10-Brenda",
      dailyEarnings: 1500,
    },
    {
      earTagID: "SN21-Juliet",
      dailyEarnings: 2500,
    }
  
];

console.log(numbers[2].dailyEarnings)

const filteredNumbers = numbers.filter( nums => 
    nums.earTagID === 'VJ10-Brenda'
    
   );


let sum = 0;

 for (let i = 0; i < filteredNumbers.length; i++) {
    
     sum += filteredNumbers[i].dailyEarnings;
 }



console.log(sum);


var dob = new Date("04/09/2021");
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();
console.log(month_diff)
//convert the calculated difference in date format
var age_dt = new Date(month_diff); 
console.log(age_dt)
//extract year from date    
var year = age_dt.getUTCFullYear();
console.log(year)

var month = age_dt.getMonth();
console.log(month)

var day = age_dt.getDay();
console.log(day)

//now calculate the age of the user
var age = Math.abs(year - 1970);
console.log(age)
//display the calculated age
console.log("Age of the date entered: " + age + " years " + month + " months " + day + " days");


// ---------------------------DAY MONTH YEAR  --------------------------------------------------//
function ageCalculator() {
//extract the year, month, and date from user date input
var dobYear = dob.getYear();
console.log(dobYear)
var dobMonth = dob.getMonth();
console.log(dobMonth)
var dobDate = dob.getDate();
console.log(dobDate)


//get the current date from the system
var now = new Date("04/09/2000");
//extract the year, month, and date from current date
var currentYear = now.getYear();
console.log(currentYear)
var currentMonth = now.getMonth();
console.log(currentMonth)
var currentDate = now.getDate();
console.log(currentDate)

 //declare a variable to collect the age in year, month, and days
 var age = {};
 var ageString = "";

 //get years
 yearAge = currentYear - dobYear;
	
 //get months
 if (currentMonth >= dobMonth)
   //get months when current month is greater
   var monthAge = currentMonth - dobMonth;
 else {
   yearAge--;
   var monthAge = 12 + currentMonth - dobMonth;
 }


 //get days
 if (currentDate >= dobDate)
 //get days when the current date is greater
 var dateAge = currentDate - dobDate;
else {
 monthAge--;
 var dateAge = 31 + currentDate - dobDate;

 if (monthAge < 0) {
   monthAge = 11;
   yearAge--;
 }
}
//group the age in a single variable
age = {
years: yearAge,
months: monthAge,
days: dateAge
};

if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
ageString = "Only " + age.days + " days old!";
//when current month and date is same as birth date and month
else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
ageString = age.years +  " years old. Happy Birthday!!";
else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
ageString = age.years + " years and " + age.months + " months old.";
else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
ageString = age.months + " months and " + age.days + " days old.";
else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
ageString = age.years + " years, and" + age.days + " days old.";
else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
ageString = age.months + " months old.";
//when current date is same as dob(date of birth)
else ageString = "Welcome to Earth! <br> It's first day on Earth!"; 

//display the calculated age
console.log(ageString); 
      
}

ageCalculator();


var sales = [
  {
    "qty":"200",
    "sellingPrice":"10.00",
    "totalSales":"2000.00",
    "date":"2022-02-02"
  },
  {
    "qty":"230",
    "sellingPrice":"10.00",
    "totalSales":"2300.00",
    "date":"2022-02-03"
  },
  {
    "qty":"250",
    "sellingPrice":"10.00",
    "totalSales":"2500.00",
    "date":"2022-02-04"
  }
  ,{
    "qty":"350",
    "sellingPrice":"10.00",
    "totalSales":"3500.00",
    "date":"2022-02-05"
  },
  {
    "qty":"200",
    "sellingPrice":"10.00",
    "totalSales":"2000.00",
    "date":"2022-02-06"
  }
]

var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
var lastDay = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());

console.log(firstDay);

console.log(lastDay);

//var now = new Date()
var now = new Date().getTime();

// var year = now.getFullYear();
// var month = now.getMonth();
// var date = now.getDate();


// var timeleft = countDownDate - now;

//var startDate = now ;
var whp = 10*(1000 * 60 * 60 * 24);


var endDate = new Date("May 25, 2022 16:37:52").getTime();

var endPeriod = now + whp

console.log(endPeriod)

var timeleft = endDate - now;
var days = Math.floor(endPeriod / (1000000 * 60 * 60 * 24));


// console.log(days, hours, minutes, seconds);
 console.log(days);
    // Display the message when countdown is over

  // for (let i = 0; i < whp; whp--) {
    
  //   console.log(whp)
   
  // }

  var myfunc = setInterval(function() {
    var whp = 28;

  },1000)
