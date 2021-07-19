var categoryContainer = document.getElementById("categoryContainer")
var questionContainer = document.getElementById("questionContainer")
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
        if(category.questions.indexOf(question) == 2){
            div.className = `${category.questions.indexOf(question)}`
        }
        else{
            div.className = `${category.questions.indexOf(question)} inv`
        }
        //------------------------------------
        var span = document.createElement("span")
        span.className = "question"
        span.textContent = `${question.question}`
        div.appendChild(span)
        //------------------------------------
        // CREATED OPTIONS
        var divOption = document.createElement("div")
        divOption.className = "option-container"
        for(option of question.options){
            var divOptions = document.createElement("div")
            divOptions.className = "options"
            divOptions.textContent = `${option}`
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
                for(currentQuestion of divButton1.parentElement.parentElement.children[0].children){
                    if(currentQuestion.classList.toString().includes("inv")){
                    }
                    else{
                        var questionNumber = parseInt(currentQuestion.classList.toString())
                        for(nextQuestion of currentQuestion.parentElement.children){
                            if(nextQuestion.className.toString().includes(`${questionNumber-1}`)){
                                nextQuestion.className = `${questionNumber-1}`
                                currentQuestion.className = `${questionNumber} inv`
                            }
                        }
                    }
                }
            })
            var divButton2 = document.createElement("div")
            divButton2.className = "button"
            divButton2.textContent = "Next >"
            divButton2.addEventListener("click",function(){
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
            })
            divButton.appendChild(divButton1)
            divButton.appendChild(divButton2)
            questionContainer.appendChild(divButton)
            //********************

}