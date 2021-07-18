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
        questionContainer.appendChild(div)
        //------------------------------------
    }
            // BACK AND NEXT BUTTON
            var divButton = document.createElement("div")
            divButton.className = "button-container"
            var divButton1 = document.createElement("div")
            divButton1.className = "button"
            divButton1.textContent = "< Back"
            var divButton2 = document.createElement("div")
            divButton2.className = "button"
            divButton2.textContent = "Next >"
            divButton.appendChild(divButton1)
            divButton.appendChild(divButton2)
            questionContainer.appendChild(divButton)
            //********************

}