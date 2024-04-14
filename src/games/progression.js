import startGameLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const makeProgression = (startNumber, stepOfProg, progressionLenght) => {
    const progression = [];

    for (let i = 1, j = startNumber; i <= progressionLenght; i += 1, j += stepOfProg) {
        progression.push(`${j}`);
    }

    return progression;
};

const generateRound = () => {
    const startNumber = getRandomNumber(3, 30);
    const stepOfProg = getRandomNumber(1, 10);
    const progressionLenght = 10;

    const progression = makeProgression(startNumber, stepOfProg, progressionLenght);

    const hiddenInex = getRandomNumber(0, progression.length - 1);
    const emptySpotValue = '..';

    const answer = progression[hiddenInex];
    const question = progression;

    question[hiddenInex] = emptySpotValue;

    return [question.join(' '), answer];
};

const runProgressionGame = () => {
    startGameLogic(description, generateRound);
};

export default runProgressionGame;