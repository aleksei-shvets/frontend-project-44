import {
  randomInt, greetingInStart,
  interactivOfGame,
} from '../index.js';

const progressionGenerator = () => {
  const progressionStep = randomInt(20) + 12 - randomInt(18);
  const startNamber = randomInt(10);
  const sequence = [];
  for (let num = startNamber; sequence.length <= 10; num += progressionStep) {
    sequence.push(num);
  }
  return sequence;
};

const logic = () => {
  const gameSequence = progressionGenerator();
  const missingNumderIndex = randomInt(gameSequence.length);
  const correctAnswer = gameSequence[missingNumderIndex];
  gameSequence[missingNumderIndex] = '..';
  const questionLine = gameSequence.join(' ');
  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const progression = () => {
  const userName = greetingInStart();
  console.log('What number is missing in the progression?');
  interactivOfGame(logic, userName);
};

export default progression;