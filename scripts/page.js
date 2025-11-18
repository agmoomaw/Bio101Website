// ====================== Abby Moomaw Bio 101 Final Project ======================

// quiz answsers (correct answer values)
const answers = {
  q1: "2",
  q2: "1",
  q3: "2",
  q4: "2",
  q5: "2",
  q6: "1",
  q7: "4",
  q8: "3",
  q9: "2",
  q10: "2"
};

// main
$(document).ready(function () {
  // ====== landing page ======
  $(".home-page").show();
  $(".sources-page").hide();
  $(".proposed-page").hide();
  $(".quiz-page").hide();

  $("#sources-button").click(function () {
    $(".sources-page").show();
    $(".home-page").hide();
    $(".proposed-page").hide();
    $(".quiz-page").hide();
  });

  $("#home-button").click(function () {
    $(".home-page").show();
    $(".proposed-page").hide();
    $(".sources-page").hide();
    $(".quiz-page").hide();
  });

  $("#proposed-button").click(function () {
    $(".proposed-page").show();
    $(".home-page").hide();
    $(".sources-page").hide();
    $(".quiz-page").hide();
  });

  $("#quiz-button").click(function () {
    $(".quiz-page").show();
    $(".home-page").hide();
    $(".sources-page").hide();
    $(".proposed-page").hide();
  });

  $("#quiz-button-home").click(function () {
    $(".quiz-page").show();
    $(".home-page").hide();
    $(".sources-page").hide();
    $(".proposed-page").hide();
  });

  $("#quiz-form").submit(function (e) {
    e.preventDefault();
    
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let feedback = "";

    // Check each answer
    for (let question in answers) {
      let userAnswer = $(`input[name="${question}"]:checked`).val();
      let isCorrect = userAnswer === answers[question];
      
      if (isCorrect) {
        score++;
        feedback += `<div class="answer-item correct"><strong>Question ${question.substring(1)}:</strong> Correct! ✓</div>`;
      } else {
        feedback += `<div class="answer-item incorrect"><strong>Question ${question.substring(1)}:</strong> Incorrect ✗</div>`;
      }
    }

    // display results buttons
    $("#score-display").html(`You scored ${score} out of ${totalQuestions} (${Math.round((score/totalQuestions)*100)}%)`);
    $("#answer-feedback").html(feedback);
    $("#quiz-form").hide();
    $("#quiz-results").show();
    
    // move page to the top when displaying results (scroll to results)
    $('html, body').animate({
      scrollTop: $("#quiz-results").offset().top - 160
    }, 500);
  });

  // retake quiz (to show after results)
  $("#retake-quiz").click(function () {
    $("#quiz-form")[0].reset();
    $("#quiz-form").show();
    $("#quiz-results").hide();
    
    // scroll again
    $('html, body').animate({
      scrollTop: $(".quiz-page h1").offset().top - 160
    }, 500);
  });
});