var counter = 0;
var correctAnswers = 0;
var inputVal;

input = document.querySelector("#CMSentry");

const sonyMusic = {link: "https://www.sonymusic.com", correct: "wordpress"};
const Extraweg = {link: "https://www.extraweg.com", correct: "wix"};
const Sephora = {link: "https://www.sephora.de", correct: "shopify"};
const fauxlie = {link: "https://www.fauxliestudios.com", correct: "wix"};
const SnoopDogg = {link: "https://www.snoopdogg.com", correct: "wordpress"};
const Kunstrukt = {link: "https://www.kunstrukt.com", correct: "wix"};
const AngryBirds = {link: "https://www.angrybirds.com", correct: "wordpress"};
const SachsenAnhalt = {link: "https://www.sachsen-anhalt.de", correct: "typo3"};
const dasKleid = {link: "https://www.daskleidsalzburg.at", correct:"wix"};
const Shoos = {link: "https://www.shoos.com", correct:"wix"};



function checkAnswer(inputAnswer, CorrectAnswer){
    
    if(inputAnswer === CorrectAnswer){
        console.log("right answer");
        counter += 1;
        correctAnswers += 1;
        document.querySelector("#CMSentry").value = '';
        nextCMS(counter);
    }    
}

function nextCMS(counter){
    document.getElementById("numberCount").innerHTML = counter + "/ 10";
    if(counter === 0){
        document.getElementById('weblink').src = sonyMusic.link;
    }

    if(counter === 1){
        document.getElementById('weblink').src = Extraweg.link;
    }

    if(counter === 2){
        document.getElementById('weblink').src = Sephora.link;
    }

    if(counter === 3){
        document.getElementById('weblink').src = fauxlie.link;
    }

    if(counter === 4){
        document.getElementById('weblink').src = SnoopDogg.link;
    }

    if(counter === 5){
        document.getElementById('weblink').src = Kunstrukt.link;
    }

    if(counter === 6){
        document.getElementById('weblink').src = AngryBirds.link;
    }

    if(counter === 7){
        document.getElementById('weblink').src = SachsenAnhalt.link;
    }

    if(counter === 8){
        document.getElementById('weblink').src = dasKleid.link;
    }

    if(counter === 9){
        document.getElementById('weblink').src = Shoos.link;
    }

    if(counter === 10){
        document.getElementById('weblink').style.display = "none";
        document.getElementById("CMSentry").style.display = "none";
        const wonLabel = document.createElement("h3");
        wonLabel.innerHTML = "Congratulations you are a cms pro";
        wonLabel.style.backgroundColor = "green";
        wonLabel.style.textAlign = "center";
        wonLabel.style.width = "80%";
        wonLabel.style.fontFamily = "Arial";
        wonLabel.style.marginLeft = "9%";
        wonLabel.style.padding = "20px";
        const restart = document.createElement("a");
        restart.innerHTML = "Play Again?";
        restart.href = "index.html";
        restart.style.textAlign = "center";
        restart.style.fontFamily = "Arial";
        restart.style.color = "black";
        restart.style.marginLeft = "10%";
        document.body.appendChild(wonLabel);
        document.body.appendChild(restart);
    }
};

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        var inputVal = document.querySelector("#CMSentry").value.toLowerCase();
        if(counter === 0){
            checkAnswer(inputVal, sonyMusic.correct);
        }
        if(counter === 1){
            checkAnswer(inputVal, Extraweg.correct);
        }
        if(counter === 2){
            checkAnswer(inputVal, Sephora.correct);
        }
        if(counter === 3){
            checkAnswer(inputVal, fauxlie.correct);
        }
        if(counter === 4){
            checkAnswer(inputVal, SnoopDogg.correct);
        }
        if(counter === 5){
            checkAnswer(inputVal, Kunstrukt.correct);
        }
        if(counter === 6){
            checkAnswer(inputVal, AngryBirds.correct);
        }
        if(counter === 7){
            checkAnswer(inputVal, SachsenAnhalt.correct);
        }
        if(counter === 8){
            checkAnswer(inputVal, dasKleid.correct);
        }
        if(counter === 9){
            checkAnswer(inputVal, Shoos.correct);
        }
    }
    });

// if(counter === 0){
    
    
// }
// if(counter === 1){
//     document.getElementById('weblink').src = gymGleisdorf.link;
//     checkAnswer(inputVal, gymGleisdorf.correct);
// }