const loader = document.querySelector('.loader');

//Start Quiz
function start () {
  document.querySelector('.first').style.display ="none";
  document.querySelector('.container').style.display ="flex";
  // Displaying the first block of question
  document.getElementsByClassName('Question-box')[0].style.display = "block";
  document.getElementsByClassName('Question-title')[0].style.display = "block";
  document.getElementsByClassName('submit')[0].style.display = "block";
}

// function stopHover() {
//   if (document.querySelector('input[type="radio"]').checked) {
//       document.querySelector('.button1').classList.remove('button1_hover');
//       document.querySelector('.button2').classList.remove('button2_hover');
//       document.querySelector('.button3').classList.remove('button3_hover');
//     }
// }

// Defining the next function
function next(id) {
  if(document.querySelector('input[type="radio"]:checked')) {
    document.getElementsByClassName('Question-box')[id-1].style.display = "none";
    document.getElementsByClassName('Question-box')[id].style.display = "block";
    document.getElementsByClassName('Question-title')[id-1].style.display = "none";
    document.getElementsByClassName('Question-title')[id].style.display = "block";
    document.getElementsByClassName('submit')[id-1].style.display = "none";
    document.getElementsByClassName('submit')[id].style.display = "block";
  }
}

//Getting final result
function result() {
  let score = 0;
  if (document.getElementById('answer12').checked) {
    score++;
  }
  if (document.getElementById('answer21').checked) {
    score++;
  }
  if (document.getElementById('answer33').checked) {
    score++;
  }
  if (document.getElementById('answer42').checked) {
    score++;
  }
  
  //Displaying the loading animation for 3 seconds
  loader.style.display="flex";
  document.querySelector('.container').innerHTML = '';
  document.querySelector('.container').append(loader);
  setTimeout(() => {
    loader.style.display = "none";
    //Displaying the result
    if (score == 4 ) {
      document.querySelector('.container').innerHTML = `<h1 class="test-completed">لقد أكملت  <span class="green">كويز الفريق الوطني الجزائري</span></h1><p class="results-info">مبروك عليك! كل إجاباتك صحيحة: <span class="score">${score} \\4</span></p>`;
    }
    else {
      document.querySelector('.container').innerHTML = `<h1 class="test-completed">لقد أكملت  <span class="green">كويز الفريق الوطني الجزائري</span></h1><p class="results-info">عدد الإجابات الصحيحة التي تحصلت عليها: <span class="score">${score} \\4</span></p>`;
    }
  }, 3000);
}
