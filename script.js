function Question(question,options,answer){
    this.question = question
    this.options = options
    this.answer = answer
}
function Category(name,questions){
    this.name = name
    this.questions = questions
}

let mathQuestions = []
let englishQuestions = []
var q1 = new Question("math q1",["a","b","c"],"b")
var q2 = new Question("math q2",["d","e","f"],"f")
mathQuestions.push(q1)
mathQuestions.push(q2)
var q3 = new Question("math q1",["a","b","c"],"b")
var q4 = new Question("math q2",["d","e","f"],"f")
englishQuestions.push(q3)
englishQuestions.push(q4)
var c1 = new Category("Math",mathQuestions)
var c2 = new Category("English",englishQuestions)