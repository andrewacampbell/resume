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
        "mobile": "1876-576-7295",
        "email": "acampbell22@stu.ncu.edu.jm",
        "github": "andrewacampbell",
        "twitter" : "@AndrewC32474598",
        "location": "Jamaica"
    },
    "welcomeMessage": "lorem ipsum dolor sit lorem ipsum dolor sit",
    "skills": [
        "Nerd", "PHP", "HTML", "MYSQL", "JS", "JQuery", "C#", "JSON", "Oracle 12c", "MSSQL", "CSS",  "Nerd", "PHP", "HTML", "MYSQL", "JS", "JQuery", "C#", "JSON"
    ],
    "bioPic": "img/fry.jpg"
}


var education = {
    "Schools":[
        {
            "name"  : "Northern Caribbean Universtiy - BSc",
            "years" : "2011-2015",
            "location"  : "Jamaica",
            "Url"   : "http://www.ncu.edu.jm",
            "Major" : "Computer Science (Hons) Programming emphasis"
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
            "location"    : "Jamaica",
            "date"        : "Feburary 2016 - Present",  
            "years"       : "0.2",
            "Description" : "Trouble shoot customer Xerox machine"
        },
        {
            "employer"    : "MCS",
            "position"    : "Software Developer",
            "location"    : "Jamaica",
            "date"        : "June 2015 - August 2015",
            "years"       : "0.3",
            "Description" : "Throughout drive into the .Net Framework, design patterns, version control, and refactoring",
            "team" : "Andrew Campbell"
        },
        {
            "employer"    : "Royal Imaging Center ",
            "position"    : "Radiographer Assist/Tech ",
            "location"    : "Jamaica",
            "date"        : "March 2010 – September 2011",
            "years"       : "0.3",
            "Description" : "•	Start and perform initial scans on machines in the mornings. •	Perform updates on computer.•	Help patients get ready for their examinations, making sure they are in their examination outfits and that they have perform their pre-examination procedures. •	Process mammogram films in dark room. •	liaise with Doctors and Radiographers to ensure urgent reports are handle first",
            "team" : "Andrew Campbell"
        }
    ]
}
var projects = {
    "projects" : [
        {
            "title" : "Patient Time tracker",
            "dates" : "2014",
            "description" : "Developed a desktop for a radiology center that track time for patient registration, length of procedure, and the time taken for each procedure. It also tracks staff info, and it is able to print reports. This project uses Visual Basic, Access, Visual studio 2013. Single Project",
            "images"       : ["img/radio1.png", "img/radio2.png"]
        },
        {
            "title" : "Language Learneri",
            "dates" : "2014",
            "description" : "Developed a Windows Phone app that teaches basic Japanese, through lessons which the can take to learn the basic words and see how sentences are form, the user is also able to listen to audio of words and sentences. The app also has a text to speech translator.  – A (Tools: Visual studio 2013 and C#) (2014). Single Project",
            "images"       : ["img/fry.jpg", "img/bird.jpg"]
        },
        {
            "title" : "The Project 3",
            "dates" : "2014",
            "description" : "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum",
            "images"       : ["img/bird.jpg"]
        },
         {
            "title" : "The Project 4",
            "dates" : "2014",
            "description" : "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum",
            "images"       : ["img/fry.jpg"]
        }
    ]
}


//$("#main").append(work.jobs.employer);

//$("#main").append(education.name);


var projectPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(projectPic);

var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(myMobile);

var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(myEmail);

var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(myGithub);

var myTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(myTwitter);

var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(myLocation);
    
var i = bio.skills.length;

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
         var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
  
}

function displayWork(){
    
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
}

function locationizer(workObj){
    var locationArr = [];
    
    for(job in workObj.jobs){
        var newLocation = workObj.jobs[job].location;
        locationArr.push(newLocation);
    }
    
    return locationArr;
}

function inName(name){
    
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " " + name[1];

}
education.display = function() {
    for(unit in education.Schools) {
        $("#education").append(HTMLschoolStart);
        
        var eduName = HTMLschoolName.replace("%data%", education.Schools[unit].name);
        $(".education-entry:last").append(eduName);
        
        //var eduDegree = HTMLschoolMajor.replace("%data%", ) 
        
        var eduDate     = HTMLschoolDates.replace("%data%", education.Schools[unit].years);
        $(".education-entry:last").append(eduDate);
             
        var eduDegree   = HTMLschoolMajor.replace("%data%", education.Schools[unit].Major);
        $(".education-entry").append(eduDegree);
        
        var eduLocation = HTMLschoolLocation.replace("%data%", education.Schools[unit].location);
        $(".education-entry:last").append(eduLocation);
       
    }
}
projects.display = function() {
    
    for(project in projects.projects) {
        
        $("#projects").append(HTMLprojectStart);
        
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(projectTitle);
        
        var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(projectDate);
        
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(projectDescription);
        
//        var projectImg = HTMLprojectImage.replace("%data%", projects.projects[project].images);
//         $(".project-entry:last").append(projectImg);
        
        
        
        if(projects.projects[project].images.length > 0) {
            
            for(img in projects.projects[project].images) {
                var projectimg = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                
                
                
                $(".project-entry:last").append(projectimg);
            }
            
        }
    }   
}

//$("#mapDiv").append(googleMap);
education.display();
projects.display();
$("#main").append(internationalizeButton);
console.log(locationizer(work));
displayWork();






























