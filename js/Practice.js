/*
This is empty on purpose! Your code to build the resume will go here.
 */
var awesomeThoughts = "I am Jacobo and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);

var email = "jacobolhernandez@yahoo.com";

var newEmail = email.replace("yahoo", "gmail");

console.log(email);
console.log(newEmail);

var name = "Jacobo Hernandez"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Wev Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
    "name": "Jacobo",
    "role": "Front End Ninja",
    "contact": {
        "mobile": "832-576-8968",
        "email": "jacobolhernandez@gmail.com",
        "github": "zerosingularity",
        "location": "Milwaukee"
    },
    "welcome message": "Hi thanks for viewing",
    "skills": [
        "HTML", "CSS", "JavaScript", "JQuery", "JSAngular"
    ],
    "bioPic": "images/fry.jpg"
}

$("#main").append(bio.name);
*/


/* Dot Notation */
var work = {};
work.position = "Front End Developer";
work.employer = "Uber";
work.years = 0.3;

/* Bracket Notation */
var education = {};
education["name"] = "Sanford Brown College";
education["years"] = "2010-2012";
education["city"] = "Milwaukee, WI, USA";

/* Notice how you can access both using either notation
$("#main").append(work["position"]);
$("#main").append(education.name);
*/

var education = {
    "schools": [
        {
            "name": "Sanford Brown College",
            "city": "Milwaukee, WI, US",
            "degree": "AS",
            "major": ["Medical Technician"],
            "graduation": "2010-2012"
        },
        {
            "name": "Udacity",
            "city": "Milwaukee, WI, US",
            "degree": "Nanodegree",
            "major": "Front End Developer"
            "graduation": "2016": "Current"
        }
    ]
}













