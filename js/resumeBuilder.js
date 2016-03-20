var name = "Andrew A. Campbell";
var role = "SOFTWARE ENGINEER";

var jobtitle = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(jobtitle);

var fName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(fName);


var bio = {
    "name" : "Andrew Campbell",
    "role" : "Software Engineer",
    "contacts": {
        "mobile": "1876-5767295",
        "email": "acampbell22@stu.ncu.edu.jm",
        "github": "andrewacampbell",
        "location": "Jamaica"
    },
    "welcomeMessage": "lorem ipsum dolor sit lorem ipsum dolor sit",
    "skills": [
        "Nerd", "PHP", "HTML", "MYSQL", "JS", "JQuery", "C#", "JSON", "Oracle 12c", "MSSQL", "CSS"
    ],
    "bioPic": "img/fry.jpg"
}



var education = {
    "Schools":[
        {
            "name"  : "Northern Caribbean Universtiy",
            "years" : "2011-2015",
            "city"  : "Manchester",
            "Url"   : "http://www.ncu.edu.jm",
            "Major" : ["Computer Science"]
        }
    ],
    "onlineCourses":[
        {
            "title"  : "JS fundamental",
            "School" : "Udacity",
            "date"   : "2016",
            "url"    : "www.udacity.com"
        }
        
    ]  
}


var work = { 
    "jobs":[
        {
            "employer"    : "Xerox",
            "position"    : "Customer Care Assoc II (Tech Support)",
            "date"        : "Feburary 2016 - Present",
            "years"       : "0.2",
            "Description" : "•	Trouble shoot customer Xerox machine"
        },
        {
            "employer"    : "MCS",
            "position"    : "Software Developer",
            "date"        : "June 2015 - August 2015",
            "years"       : "0.3",
            "Description" : "•	Throughout drive into the .Net Framework, design patterns, version control, and refactoring",
            "team" : "Andrew Campbell"
        },
        {
            "employer"    : "Royal Imaging Center ",
            "position"    : "Radiographer Assist/Tech ",
            "date"        : "March 2010 – September 2011",
            "years"       : "0.3",
            "Description" : "• Tech assisitant and customer support",
            "team" : "Andrew Campbell"
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title" : "The Project",
            "dates" : "2014",
            "description" : "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum"
        }
    ]
}


//$("#main").append(work.jobs.employer);

//$("#main").append(education.name);

var i = bio.skills.length;

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
         var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
  
}


for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formatEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    
    var formatPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    
    var formatdate = HTMLworkDates.replace("%data%", work.jobs[job].date);
    var formatdesc = HTMLworkDescription.replace("%data%", work.jobs[job].Description);
    
    var formatEmpTitle = formatEmp + formatPosition;
    
    $(".work-entry:last").append(formatEmpTitle);
    $(".work-entry:last").append(formatdate);
    $(".work-entry:last").append(formatdesc);
    
}





























