const quizDB = [{
    question: "1.What is Capital of India?",
    a: "delhi",
    b: "pune",
    c: "banglore",
    d: "mumbai",
    answer: "ans1"
},

{
    question: "2.What is Capital of America?",
    a: "New Orleans",
    b: "washington",
    c: "New York",
    d: "Chicago",
    answer: "ans2"
},

{
    question: "3.What is Capital of Germany?",
    a: "berlin",
    b: "munich",
    c: "hamburg",
    d: "leipzig",
    answer: "ans1"
},

{
    question: "4.What is Capital of China?",
    a: "Lhasa",
    b: "Beijing",
    c: "Shanghai",
    d: "Hong Kong",
    answer: "ans2"
},

{
    question: "5.What is Capital of Britain?",
    a: "London",
    b: "Manchester",
    c: "Glasgow",
    d: "Liverpool",
    answer: "ans1"
},
{
    question: "6.What is Capital of karnataka?",
    a: "bengalore",
    b: "hyderabad",
    c: "delhi",
    d: "panaji",
    answer: "ans1"
},
{
    question: "7.What is Capital of goa?",
    a: "delhi",
    b: "panagi",
    c: "hyderabad",
    d: "chennai",
    answer: "ans2"
},
{
    question: "8.What is Capital of west bengal?",
    a: "chennai",
    b: "delhi",
    c: "hyderabad",
    d: "kolkata",
    answer: "ans4"
},
{
    question: "9.What is Capital of madhya pradesh?",
    a: "chennai",
    b: "hyderabad",
    c: "delhi",
    d: "indoor",
    answer: "ans4"
},
{
    question: "10.What is Capital of tamilnadu?",
    a: "chennai",
    b: "hyderabad",
    c: "panaji",
    d: "delhi",
    answer: "ans1"
},

];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const previous = document.querySelector("#previous");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");
let quesCount = 0;
let score = 0;
const loadQuestion = function () {
    quesList = quizDB[quesCount];
    question.innerText = quesList.question;
    option1.innerText = quesList.a;
    option2.innerText = quesList.b;
    option3.innerText = quesList.c;
    option4.innerText = quesList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElement) => curAnsElement.checked = false)
}

// submit for next question
submit.addEventListener('click', () => {
    var checkedAnswer = document.querySelector('input[type=radio]:checked');
    if (!checkedAnswer) {
        alert("please select your answer");
        return;
    }
    checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[quesCount].answer) {
        score++;
    };
    quesCount++;
    deselectAll();
    if (quesCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `<h3>your score is ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()"> again</button>`;

        showScore.classList.remove("scoreArea");
    }
});

// previous question
previous.addEventListener('click',() => {
    // var checkedAnswer = document.querySelector('input[type=radio]:checked');
    // if (!checkedAnswer) {
    //     alert("please select your answer");
    //     return;
    // }

   var checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[quesCount].answer) {
        score++;
    };
    quesCount--;
    deselectAll();
    if (quesCount < quizDB.length) {
        loadQuestion();
    }

}
)
