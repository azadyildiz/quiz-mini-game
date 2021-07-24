function Category(name){
    this.name = name
    this.questions = []
}
var categories = []
var c1 = new Category("Math")
categories.push(c1)
var c2 = new Category("English")
categories.push(c2)

function Question(question,options,answer,category){
    this.question = question
    this.options = options
    this.answer = answer
    this.category = category
    let userAnswer
}

var questions = []
var q1 = new Question("math q1",["a","b","c"],0,"Math")
questions.push(q1)
var q2 = new Question("math q2",["d","e","f"],1,"Math")
questions.push(q2)
var q3 = new Question("eng q1",["a","b","c"],1,"English")
questions.push(q3)
var q4 = new Question("eng q2",["d","e","f"],2,"English")
questions.push(q4)
var q5 = new Question("math q3",["d","e","f"],2,"Math")
questions.push(q5)

for(let question of questions){
    for(let category of categories){
        if(question.category == category.name){
            category.questions.push(question)
        }
    }
}