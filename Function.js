let questions=[
    {
        quizQue: "Who is the First PM of India ?",
        answers:[
            {text:"Dr. Rajendra Prasad", correct:false},
            {text:"Pt. Jawaharlal Nehru", correct:true},
            {text:"Dr. Abdul Kalam", correct:false},
            {text:"Dr. Narendra Modi", correct:false},
        ]
    },
    {
        quizQue: "Who is the First President of India ?",
        answers:[
            {text:"Dr. Rajendra Prasad", correct:true},
            {text:"Dropadi Murmu", correct:false},
            {text:"Dr. Abdul Kalam", correct:false},
            {text:"Dr. Narendra Modi", correct:false},
        ]
    },
    {
        quizQue: "Who is the smallest state of India ?",
        answers:[
            {text:"Uttar Pradesh", correct:false},
            {text:"Sikkim", correct:false},
            {text:"Assam", correct:false},
            {text:"Goa", correct:true},
        ]
    },
    {
        quizQue: "Who is the smallest state of India ?",
        answers:[
            {text:"Uttar Pradesh", correct:false},
            {text:"Madhya Pradesh", correct:false},
            {text:"Rajasthan", correct:true},
            {text:"Gujarat", correct:false},
        ]
    },
]
let quizQue= document.getElementById("quizQue");
let allAns= document.getElementById("allAns");
let submit= document.getElementById("submit");

let currentQue= 0;
let score= 0;

let startQuizz=()=>{
    currentQue=0;
    score=0;
    submit.innerHTML="Next";
    showQue();
}
function showQue(){
    let newQue= questions[currentQue];
    let queNo=currentQue+1;
    quizQue.innerHTML=queNo+". "+ newQue.quizQue

    newQue.answers.forEach(answers => {
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("text-start", "p-2", "mb-4", "rounded-4", "option")
        allAns.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct
        }
        button.addEventListener("click", selectAns=(e)=>{
            const selectedbtn=e.target;
            const isCorrect= selectedbtn.dataset.correct==="true";
            if (isCorrect){
                selectedbtn.classList.add("correct")
                score++
            } else {
                selectedbtn.classList.add("wrong")
            }
            Array.from(allAns.children).forEach(button=>{
                if (button.dataset.correct==="true"){
                    button.classList.add("correct")
                }
                button.disabled=true;
            })
            submit.style.display="block"
        })
    });
}
startQuizz()