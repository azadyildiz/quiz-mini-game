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
var q1 = new Question("2+2",["4","5","6"],0,"Math")
questions.push(q1)
var q2 = new Question("2-2",["2","0","4"],1,"Math")
questions.push(q2)
var q3 = new Question("______ are you from?",["Where","When","What"],0,"English")
questions.push(q3)
var q4 = new Question("I ___ school yesterday.",["go","went","going"],1,"English")
questions.push(q4)
var q5 = new Question("2x1",["4","3","2"],2,"Math")
questions.push(q5)

for(let question of questions){
    for(let category of categories){
        if(question.category == category.name){
            category.questions.push(question)
        }
    }
}