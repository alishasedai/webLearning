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
let index = 0;
let wrong = 0, right = 0, total = questions.length;
let queData = document.querySelector(".queBox");
let options = document.querySelectorAll(".options");
const loadQuestions = () => {

    if(index === total){
      return endGame();
    }
    let data = questions[index];
    queData.innerHTML = `${index+1}) ${data.question}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
   const ans = getAnswer();
   if(ans === data.correct){
    right++;
   }
   else {
    wrong++
   }
   index++;
   loadQuestions();
   reset();
}
const getAnswer = () => {
    let answer ;
    options.forEach((input) => {
        if(input.checked){
            answer = input.value;

        }
    })
    return answer;
}
const reset = () => {
   options.forEach((input) => {
  input.checked = false;
   })
}
const endGame = () => {
    const box = document.querySelector(".box");
    box.innerHTML = `Game end..
    you score ${right} / ${total}`;
}

loadQuestions();


