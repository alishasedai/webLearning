const questions = [
    {
        "que" : "What HTML stands for ?",
        "a" : "HyperText Markup Language",
        "b" : "Hi Team Metro Language",
        "c" : "Hero Top Map Level",
        "d" : "Hello Tie Mango Love",
        "correct" : "a"
    },
    {
        "que" : "What does CSS stands for ?",
        "a" : "Current Streak Supply",
        "b" : "Cascasding Style Sheet",
        "c" : "Cat Such Sleepy",
        "d" : "None of the above",
    }
]
let index = 0;
let queBox = document.querySelector(".quebox");
let options = document.querySelectorAll(".options")

const loadQuestions = () => {
    const data = questions[index];
    queBox.innerText = `${index + 1 }) ${data.que}`;
    options[0].nextElementSibling.innerText = `${data.a}`
    options[1].nextElementSibling.innerText = `${data.b}`;
    options[2].nextElementSibling.innerText = `${data.c}`;
    options[3].nextElementSibling.innerText = `${data.d}`
}

const submitQuiz = () => {
    const ans = getAnswer();
}
const getAnswer = () => {
    options.forEach(
        (input) => {
           if(input.checked){
            console.log("yes");
           }
           else{
            console.log("no")
           }
        }
    )
}
loadQuestions()