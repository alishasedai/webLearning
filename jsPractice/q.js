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
        "correct" : "b"
    }
]
let index = 0;
let total = questions.length;
let right = 0, wrong = 0 ;
let queBox = document.querySelector(".quebox");
let options = document.querySelectorAll(".options")


const loadQuestions = () => {

    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerText = `${index + 1 }) ${data.que}`;
    options[0].nextElementSibling.innerText = `${data.a}`
    options[1].nextElementSibling.innerText = `${data.b}`;
    options[2].nextElementSibling.innerText = `${data.c}`;
    options[3].nextElementSibling.innerText = `${data.d}`
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
         right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestions();
}
const getAnswer = () => {
    let answer;
    options.forEach(
        
        (input) => {
           if(input.checked){
            answer = input.value;
           }
        
        }
        
    )
    return answer;
}
const reset = () => {
   
     options.forEach((input) => {
       input.checked = false;
     });
}

const endQuiz = () => {
    const box = document.querySelector(".box");
    box.innerHTML = `
    Quiz End
    your score is ${right} / ${total}`
}
loadQuestions()