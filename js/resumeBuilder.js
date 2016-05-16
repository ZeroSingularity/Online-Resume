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
    "bioPic": "images/fry.jpg"
}

//defines bio display function
bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

var education = {
    "schools": [
        {
            "name": "Sanford Brown College",
            "location": "Milwaukee, WI, US",
            "degree": "AS",
            "major": "Medical Technician",
            "dates": "2010-2012"
        },
        {
            "name": "Udacity",
            "location": "Milwaukee, WI, US",
            "degree": "Nanodegree",
            "major": "Front End Developer",
            "dates": "2016 - Current"
        }
    ]
}

function displayEducation() {

    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedschoolName);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);
    }
}

displayEducation();

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
    ]
}

function displayWork() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();


var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "March 2016",
            "description": "blah blah blah",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ]
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

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