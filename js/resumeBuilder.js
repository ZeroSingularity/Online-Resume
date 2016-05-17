var bio = {
    "name": "Jacobo Hernandez",
    "role": "Front End Ninja",
    "contact": {
        "mobile": "832-576-8968",
        "email": "jacobolhernandez@gmail.com",
        "github": "zerosingularity",
        "location": "Milwaukee"
    },
    "welcomeMessage": "Hi thanks for viewing",
    "skills": [
        "HTML", "CSS", "JavaScript", "JQuery", "JSAngular"
    ],
    "bioPic": "images/fry.jpg",
    display: function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $("#skills:last").append(HTMLskills.replace("%data%", skill));
        });
    }
};

var education = {
    "schools": [
        {
            "name": "Sanford Brown College",
            "location": "Milwaukee, WI",
            "degree": "Associate's Degree",
            "major": [
                "Medical Technician"
            ],
            "dates": "2010 - 2012",
            "url": "www.sanfordbrowncollege.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Developer",
            "school": "Udacity",
            "date": "2016 - Current",
            "url": "www.udacity.com"
        }
    ],
    displaySchools: function () {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
        }
    },
    displayOnlineCourses: function () {
        for (var course in education.onlineCourses) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Uber",
            "title": "Partner Support Representative",
            "dates": "October 2015 - Present",
            "location": "Milwaukee, WI, US",
            "description": "Train, onboard, and support new and existing partners with all levels of knowledge of Uber and its policies"
        },
        {
            "employer": "Instile",
            "title": "Senior Corporate Trainer",
            "dates": "October 2014 - August 2015",
            "location": "Chicago, IL, US",
            "description": "Increase and meet sales quotas through acquisiton of new clients while maintaining relationships with exisiting clients"
        }
    ],
    display: function() {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer + HTMLworkTitle.replace("%data%", work.jobs[job].title)));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "March 2016",
            "description": "blah blah blah",
            "images": [
                "images/197x148.gif", "images/197x148.gif"
            ]
        }
    ],
    display: function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[0]));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[1]));
        }
    }
};
//End JSONs

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();

// This is used with console.log to show an array of locations you have worked based on the JSON you have created! Pretty neat huh? :)
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
};