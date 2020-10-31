function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}


function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
  new Question("Who is the main character of Nightmare on Elm Street?", ["Spongebob", "Michael Myers","Jason Voorhees", "Freddy Krueger"], "Freddy Krueger"),
  new Question("Where is Transylvania Located?", ["South Africa", "Germany", "Romania", "Russia"], "Romania"),
  new Question("How much did Americans spend on Halloween in 2019?", ["$5 Million", "$500 Million","$2.6 Billion", "$5 Billion"], "$2.6 Billion"),
  new Question("What is the most commercially successful horror movie of all time?", ["It", "Halloween", "Texas Chainsaw Massacre", "Saw"], "It"),
  new Question("In which country did Halloween originate?", ["Russia", "America", "Germany", "Ireland"], "Ireland")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

