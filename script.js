var categoryContainer = document.getElementById("categoryContainer")
var questionContainer = document.getElementById("questionContainer")
var popupContainer = document.getElementById("popupContainer")
var resultContainer = document.getElementById("resultContainer")
const alphabet = ["A","B","C","D","E"]
// CATEGORY CHOOSE SCREEN
for(category of categories){
    var div = document.createElement("div")
    div.className = "options"
    div.textContent = category.name
    div.addEventListener("click",function(e){
        categoryChoose(e)
    })
    categoryContainer.appendChild(div)
}
// WHEN CLICKED AN OPTION
let categoryName
function categoryChoose(event){
    for(category of categories){
        if(event.target.textContent == category.name){
            categoryContainer.style.opacity = "0"
            categoryContainer.style.zIndex = "0"
            setTimeout(function(){
                categoryContainer.className = "category-container container inv"
                questionContainer.className = "question-container container"
                setTimeout(function(){
                    questionContainer.style.opacity = "1"
                    questionContainer.style.zIndex = "2"
                },500)
            },500)
            categoryName = category.name
            createQuestions(category)
        }
    }
}

function createQuestions(category){
    var divMain = document.createElement("div")
    divMain.className = "questions"
    for(question of category.questions){
        var div = document.createElement("div")
        // WE JUST PRINT SCREEN FIRST QUESTION
        if(category.questions.indexOf(question) == 0){
            div.className = `${category.questions.indexOf(question)}`
        }
        else{
            div.className = `${category.questions.indexOf(question)} inv`
        }
        //------------------------------------
        var span = document.createElement("span")
        span.className = "question"
        span.textContent = `${category.questions.indexOf(question)+1}. ${question.question}`
        question.question = `${category.questions.indexOf(question)+1}. ${question.question}` // CHECK HERE
        div.appendChild(span)
        //------------------------------------
        // CREATED OPTIONS
        var divOption = document.createElement("div")
        divOption.className = "option-container"
        var counter = 0
        for(var i = 0 ; i<question.options.length;i++){
            var divOptions = document.createElement("div")
            divOptions.className = "options"
            divOptions.textContent = `${alphabet[counter]}) ${question.options[i]}`
            question.options[i] = `${alphabet[counter]}) ${question.options[i]}`

            counter++

            divOptions.addEventListener("click",function(e){
                if(e.target.className.includes("chosen")){
                    e.target.className = "options"
                }
                else{
                    for(option of e.target.parentElement.children){

                        if(option.className.includes("chosen")){
                            option.className = "options"
                            e.target.className = "chosen"
                        }
                        else{
                            e.target.className = "chosen"
                        }
                    }
                }
            })
            divOption.appendChild(divOptions)
        }
        div.appendChild(divOption)
        divMain.appendChild(div)
        //------------------------------------
    }
    questionContainer.appendChild(divMain)
            // BACK AND NEXT BUTTON
            var divButton = document.createElement("div")
            divButton.className = "buttons"
            var divButton1 = document.createElement("div")
            divButton1.className = "button"
            divButton1.textContent = "< Back"
            divButton1.addEventListener("click",function(){
                getBackQuestion(divButton1)
            })
            var divButton2 = document.createElement("div")
            divButton2.className = "button"
            divButton2.textContent = "Next >"
            divButton2.addEventListener("click",function(){
                getNextQuestion(divButton2)
            })
            divButton.appendChild(divButton1)
            divButton.appendChild(divButton2)
            questionContainer.appendChild(divButton)
            var finish = document.createElement("div")
            finish.className = "button finish"
            finish.textContent = "Finish the quiz!"
            finish.addEventListener("click",function(){
                popupContainer.className = "popup-container"
            })
            questionContainer.appendChild(finish)
            //********************

}
popupContainer.addEventListener("click",function(e){
    if(e.target.className == "button"){
       if(e.target.textContent == "Yes"){
           quizFinished() // TODO
       }
       else{
           popupContainer.className = "popup-container inv"
       }
    }
})

function getBackQuestion(divButton1){
    var flag = false
    for(currentQuestion of divButton1.parentElement.parentElement.children[0].children){
        if(currentQuestion.classList.toString().includes("inv")){
        }
        else{
            var questionNumber = parseInt(currentQuestion.classList.toString())
            for(nextQuestion of currentQuestion.parentElement.children){
                if(nextQuestion.className.toString().includes(`${questionNumber-1}`)){
                    nextQuestion.className = `${questionNumber-1}`
                    currentQuestion.className = `${questionNumber} inv`
                    flag = true
                }
            }
        }
        if(flag){
            break
        }
    }
}
function getNextQuestion(divButton2){
    var flag = false
    for(currentQuestion of divButton2.parentElement.parentElement.children[0].children){
        if(currentQuestion.classList.toString().includes("inv")){
        }
        else{
            var questionNumber = parseInt(currentQuestion.classList.toString())
            for(nextQuestion of currentQuestion.parentElement.children){
                if(nextQuestion.className.toString().includes(`${questionNumber+1}`)){
                    nextQuestion.className = `${questionNumber+1}`
                    currentQuestion.className = `${questionNumber} inv`
                    flag = true
                }
            }
        }
        if(flag){
            break
        }
    }
}

function quizFinished(){
    var trueCounter = 0
    var falseCounter = 0
    var emptyCounter = 0
    var flag = false
    for(questionHTML of questionContainer.firstElementChild.children){
        for(questionData of questions){
            if(questionHTML.firstElementChild.textContent == questionData.question){
                for(var i = 0; i<questionHTML.children[1].children.length;i++){
                    if(questionHTML.children[1].children[i].className == "chosen"){
                        if(i == questionData.answer){
                            trueCounter++
                            flag = true
                        }
                        else{
                            falseCounter++
                            flag = true
                        }
                    }
                }
                if(!flag){
                    emptyCounter++
                }
                flag = false
            }
        }
    }
    // OTHER THINGS
    questionContainer.className = "question-container container inv"
    popupContainer.className = "popup-container inv"

    spanHeader = document.createElement("span")
    spanHeader.className = "result header"
    spanHeader.textContent = "YOUR RESULT"

    spanTrue = document.createElement("span")
    spanTrue.className = "result"
    spanTrue.textContent = `True Answer = ${trueCounter}`

    spanFalse = document.createElement("span")
    spanFalse.className = "result"
    spanFalse.textContent = `False Answer = ${falseCounter}`

    spanEmpty = document.createElement("span")
    spanEmpty.className = "result"
    spanEmpty.textContent = `Empty Answer = ${emptyCounter}`

    deneme = document.createElement("a")

    aAgain = document.createElement("a")
    aAgain.setAttribute("href","index.html")
    aAgain.className = "finish again"
    aAgain.innerHTML = "Try Again"

    resultContainer.appendChild(spanHeader)
    resultContainer.appendChild(spanTrue)
    resultContainer.appendChild(spanFalse)
    resultContainer.appendChild(spanEmpty)
    resultContainer.appendChild(aAgain)
    resultContainer.className = "result-container container"
}