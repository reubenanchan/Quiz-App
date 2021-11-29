
const express = require('express');
const questions = require('./questions.json');

const app = express();

app.use(express.static('static'));

app.get('/questions', function(request,response){
    let questionsNoAnswers = JSON.parse(JSON.stringify(questions));
    
    for(q in questionsNoAnswers){delete questionsNoAnswers[q].answerIndex;}
    
    response.json(questionsNoAnswers); 
})


app.get('/answers', function(request,response){

    let question_index = request.query.q;
    let answer_index = request.query.a;
    let result = "";

    let question = questions[question_index];

    if(question.answerIndex == answer_index){result = "Correct " + question_index;}//indicate if answer is correct

    response.send(result);
})



app.listen(80);