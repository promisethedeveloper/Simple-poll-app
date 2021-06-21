'use strict';

// const answers = [];
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const reply = Number(
      prompt(
        'What is your favorite programming language?\n 0:JavaScript\n1:Python\n2:Rust\n3:C++\n(Write option number)'
      )
    );
    if (reply === 0) {
      poll.answers[0]++;
    } else if (reply === 1) {
      poll.answers[1]++;
    } else if (reply === 2) {
      poll.answers[2]++;
    } else if (reply === 3) {
      poll.answers[3]++;
    } else {
      poll.registerNewAnswer();
    }
    poll.displayResults();
    poll.displayResults('string');
  },
};

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(`${poll.answers}`);
  } else if (type === 'string') {
    console.log(`Poll results are ${poll.answers.join(', ')}`);
  }
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer);

// poll.displayResults();
