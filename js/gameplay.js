var obj = [{
    ques: "Who was the first man in space?",
    choice1: "Neil Armstrong",
    choice2: "Yuri Gagarin",
    choice3: "Buzz Aldrin",
    choice4: "Michael Collins",
    ans: "B"
},
{
    ques: "Who was the first living creature in space?",
    choice1: "A Dog",
    choice2: "A Cat",
    choice3: "A Chicken",
    choice4: "A Panther",
    ans: "A"
},
{
    ques: "Which planet is named after the Roman god of war?",
    choice1: "Venus",
    choice2: "Saturn",
    choice3: "Earth",
    choice4: "Mars",
    ans: "D"
},
{
    ques: "Which is the largest moon in the solar system?",
    choice1: "Ganymede",
    choice2: "Titan",
    choice3: "Lo",
    choice4: "Europa",
    ans: "A"
},
{
    ques: "What was the first artificial satellite?",
    choice1: "Salyut 1",
    choice2: "Sputnik 1",
    choice3: "Skylab",
    choice4: "Telstar 1",
    ans: "B"
},
{
    ques: "What is the most distant object visible to the naked eye?",
    choice1: "Andromeda Galaxy",
    choice2: "Pluto",
    choice3: "Eagle Nebula",
    choice4: "Triangulum Galaxy",
    ans: "A"
},
{
    ques: "When will the Voyager 1 spacecraft pass by another star system",
    choice1: "200 years",
    choice2: "400 years",
    choice3: "40000 years",
    choice4: "1000 years",
    ans: "C"
},
{
    ques: "Which planet is bigger?",
    choice1: "Venus",
    choice2: "Mars",
    choice3: "Mercury",
    choice4: "Earth",
    ans: "D"
},
{
    ques: "Which planet is known as the Morning Star & also the Evening Star?",
    choice1: "Mars",
    choice2: "Saturn",
    choice3: "Jupiter",
    choice4: "Venus",
    ans: "D"
},
{
    ques: "How long does it take for light from the Sun to reach Earth?",
    choice1: "1 minute",
    choice2: "Instantaneous",
    choice3: "8 minutes",
    choice4: "1 hour",
    ans: "C"
},
]

const start = document.getElementById("start");
const startContainer = document.getElementById("startContainer");
const quizContainer = document.getElementById("container");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
let choices = document.querySelectorAll('.choice');
let scoreCounter = document.getElementById("scoreCounttxt");
let quesCounter = document.getElementById("quesCounttxt");
const btn = document.getElementById("next-btn");
const scoreDiv = document.getElementById("scoreContainer")


let runningQuestion = 0;
let questionNumber = 1;
const lastQuestion = obj.length - 1;
let score = 0;
const bonus = 10;


startContainer.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    startContainer.style.display = "none";
    renderQuestion();
    quizContainer.style.display = "block";

}

// render a question
function renderQuestion() {
    let q = obj[runningQuestion];
    question.innerHTML = "<p>" + q.ques + "</p>";
    choiceA.innerHTML = q.choice1;
    choiceB.innerHTML = q.choice2;
    choiceC.innerHTML = q.choice3;
    choiceD.innerHTML = q.choice4;
}



function checkAnswer(answer) {
    if (answer == obj[runningQuestion].ans) {
        // answer is correct
        // score++;
        // change choice background color to green
        for (let i = 0; i < choices.length; i++) {
            let ele = choices[i];
            if (ele.id == answer) {
                ele.classList.add('green');
                score = score + bonus;
                scoreCounter.innerText = score;
                console.log(score);
            }
            else if (ele.id != answer) {
                ele.classList.add('red');
                console.log(ele.id);
            }
        }

    } 
    else 
    {
        // answer is wrong
        // change choice background color to red
        for (let k = 0; k < choices.length; k++) 
        {
            let arr = choices[k];
            if (arr.id == answer) {
                arr.classList.add('red');
            }
        }
    }
}

btn.addEventListener('click', () => {
    if (runningQuestion < lastQuestion) {
        for (var i = 0; i <= 3; i++) {
            choices[i].classList.remove('red');
            choices[i].classList.remove('green');
        }
        runningQuestion++;
        questionNumber++;
        quesCounter.innerText = `${questionNumber}/${lastQuestion + 1}`;
        renderQuestion();
    }
    else {
        scoreDiv.style.display = "block";
        scoreDiv.innerHTML = "<p id='showScore'>" + "Your Score: " + score + "</p>" + `<div> <button id="btn-restart" onclick="location.reload()" > Play Again? </button> </div>`;
    }
})

// Play and Pause Music
const pause = document.getElementById("pauseBtn")
const audio = document.querySelector("audio");

function playMusic(audio) {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }

}