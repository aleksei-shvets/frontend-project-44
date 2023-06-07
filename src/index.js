import * as readlineSync from 'readline-sync';

const interactivOfGame = (logicGenerator, rules) => {
  const inputOut = (question) => {
    const answer = readlineSync.question(question);
    return answer;
  };

  const greetingInStart = () => {
    console.log('Welcome to the Brain Games!');
    const user = inputOut('May I have your name? ');
    console.log(`Hello, ${user}!`);
    return user;
  };
  const userName = greetingInStart();

  console.log(rules);

  const startCountGame = 1;
  const endCountGame = 3;
  for (let gameCount = startCountGame; gameCount <= endCountGame; gameCount += 1) {
    const logic = logicGenerator();
    const [questionLine, correctAnswer] = logic;
    const answer = inputOut(`Question: ${questionLine} \nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default interactivOfGame;
