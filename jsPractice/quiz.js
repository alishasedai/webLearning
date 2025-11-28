const questions = [
    {
        'question' : 'Which of the following is a markup languages?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'Javascript',
        'd' : 'Php',
        'correct' : 'a'
    },
    {
        'question' : 'Which year javascript was launched?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'None of the above',
        'correct' : 'b'
    },
     {
        'question' : 'What does CSS stands for?',
        'a' : 'HyperText Markup language',
        'b' : 'Cascading Style Sheet',
        'c' : 'Jason Object Notation',
        'd' : 'None of the above',
        'correct' : 'b'
    },

]
let index = 2;
let queData = document.querySelector(".queBox");
let options = document.querySelectorAll(".options");
const loadQuestions = () => {
    let data = questions[index];
    console.log(data.question)
    queData.innerHTML = `${index+1}) ${data.question}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;


}
loadQuestions()