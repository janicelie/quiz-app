const quizData = [
    {
        question: 'How old is Janice?',
        a: '20',
        b: '21',
        c: '23',
        d: '24',
        correct: 'b'
    },
    {
        question: 'What is her favourite food?',
        a: 'Satay Padang',
        b: 'Nasi Padang',
        c: 'Martabak Manis',
        d: 'Jojo PanMee',
        correct: 'a'
    },
    {
        question: 'What is her favourite drink?',
        a: 'Boba Tea',
        b: 'Yomie',
        c: 'Black Tea',
        d: 'Capucino',
        correct: 'b' 
    },
    {
        question: 'What is her hobby?',
        a: 'Sleeping',
        b: 'Eating',
        c: 'Crocheting',
        d: 'Smiling',
        correct: 'c'
    },
    {
        question: 'Where does she live?',
        a: 'Indonesia',
        b: 'Singapore',
        c: 'Malaysia',
        d: 'China',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionDisplayed= document.getElementById("questionDisplayed");
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionDisplayed.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerElements.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerElements.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz(); 
        }else{
            quiz.innerHTML = `<h2> Congratulation ! You got ${score}/${quizData.length}</h2>
            <button onclick="location.reload()"> Quiz Again </button>`;
        }
    }
});