
var correctAnswers = 0;
var inputVal;

input = document.querySelector("#CMSentry");

let Websites = [
    {
        "name": "SnoopDogg",
        "link": "https://www.snoopdogg.com",
        "correct": "wordpress"
    }, 
    {
        "name": "chip",
        "link": "https://www.chip.de",
        "correct": "no"
    },
    {
        "name": "redbullring",
        "link": "https://www.redbullring.com",
        "correct": "wordpress" 
    },
    {
        "name": "kali",
        "link": "https://www.kali.org/",
        "correct": "no"
    },
    {
        "name": "wikipedia",
        "link": "https://en.wikipedia.org",
        "correct": "no"
    },
    {
        "name": "herold",
        "link": "https://www.herold.at/",
        "correct": "wordpress"
    },
    {
        "name": "mercedesbenzg",
        "link": "https://www.mercedes-benz-g.at/unternehmen/",
        "correct": "no"
    },
    {
        "name": "americanmotors",
        "link": "https://www.american-motors.at",
        "correct": "wordpress"
    },
    {
        "name": "oxweiz",
        "link": "https://ox-weiz.at/",
        "correct": "typo3"
    },
    {
        "name": "jetpunk",
        "link": "https://www.jetpunk.com",
        "correct": "no"
    },
    {
        "name": "fuberlin",
        "link": "https://blogs.fu-berlin.de/",
        "correct": "wordpress"
    }
];

var CorrectWebsite = "";
var Choice = "";
RandomSite();


// // Timer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let myVar = setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
 


function checkAnswer(inputAnswer, CorrectAnswer){
    if(inputAnswer === CorrectAnswer){
        console.log("right answer");
        correctAnswers += 1;
        document.querySelector("#CMSentry").value = '';
        RandomSite();
    }    
}

function nextCMS(Choice, ChoiceLink){
    console.log(Choice);
    document.getElementById("numberCount").innerHTML = Websites.length + " left";
    document.getElementById('weblink').src = ChoiceLink;  

};

function RandomSite(){
    
    if(Websites.length > 0){
        var RandomChoice = Websites[Math.floor(Math.random() * Websites.length)];
        for (var i = 0; i < Websites.length; i++) {
            // console.log(Websites[i]);
            if (Websites[i] === RandomChoice) {
                Websites.splice(i, 1);
                // console.log("Removed element: " + spliced);
                // console.log("Remaining elements: " + Websites);
            }
        }
        Choice = RandomChoice.name;
        CorrectWebsite = RandomChoice.correct;
        // console.log(Choice);
        nextCMS(Choice, RandomChoice.link);
    }
    else{
        document.getElementById('weblink').style.display = "none";
        document.getElementById("CMSentry").style.display = "none";
        clearInterval(myVar);
        document.getElementById("timeText").style.display = "block";
        document.getElementById("timeLabel").style.display = "block";
        document.getElementById("playAgain").style.display = "block";
    }
}

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        var inputVal = document.querySelector("#CMSentry").value.toLowerCase();
        checkAnswer(inputVal, CorrectWebsite);
        
    }
});



// All Comments 


// const wonLabel = document.createElement("h3");
// wonLabel.innerHTML = "Congratulations you are a cms pro";
// wonLabel.style.backgroundColor = "green";
// wonLabel.style.textAlign = "center";
// wonLabel.style.width = "80%";
// wonLabel.style.fontFamily = "Arial";
// wonLabel.style.marginLeft = "9%";
// wonLabel.style.padding = "20px";
// const restart = document.createElement("a");
// restart.innerHTML = "Play Again?";
// restart.href = "index.html";
// restart.style.textAlign = "center";
// restart.style.fontFamily = "Arial";
// restart.style.color = "black";
// restart.style.marginLeft = "10%";
// document.body.appendChild(wonLabel);
// document.body.appendChild(restart);

// if(Choice === 0){
    
    
// }
// if(Choice === 1){
//     document.getElementById('weblink').src = gymGleisdorf.link;
//     checkAnswer(inputVal, gymGleisdorf.correct);
// }