import { countries } from "./countries";
import { choice } from "./random";

let countriesToGuess: Array<string> = [];
let totalFlags: number = 0;
let flagsGuessed: number = 0;
let maximumFlagOptions: number = 3;

function getRandomFlags(flagCount: number): Array<string> {
    const picks: Set<string> = new Set();
    while (picks.size < Math.min(flagCount, countriesToGuess.length)) {
        picks.add(choice(countriesToGuess))
    }
    return Array.from(picks);
}

export function setMaximumFlagOptions(amount: number): void {
    maximumFlagOptions = amount;
}

function showFlag(countryCode: string): void {
    const flag = document.getElementById(countryCode);
    if (flag === null) return;
    flag.style.display = 'flex';
}

function visibility(token: string, visible: boolean): void {
    document.querySelectorAll<HTMLElement>(token).forEach((element) => {
        element.style.display = visible ? 'block' : 'none';
    });
}

function hideAllFlags(): void {
    visibility('.country-component, .country-component .name', false);
}

function showAllFlagText(): void {
    visibility('.country-component .name', true);
}

let correctPick: null | string = null;

export function guessFlag(guessPick: string): void {
    const isCorrect = guessPick === correctPick;
    
    setText(isCorrect ? 'That\'s correct!' : 'That\'s wrong.');
    
    if (isCorrect) {
        setText('That\'s correct!');
        countriesToGuess = countriesToGuess.filter((c) => c !== correctPick);
        flagsGuessed ++;
        hideAllFlags();
        updateBar();
        setTimeout(continueRound, 600);
    } else {
        setText(`That's wrong. You picked ${countries[guessPick]}.`);
        showAllFlagText();
        setTimeout(() => {
            hideAllFlags();
            continueRound(); 
        }, 2000);
    }

}

function setText(text: string): void {
    const topText = document.getElementById('text') as HTMLElement;
    topText.innerText = text;
}

function updateBar(): void {
    const completionBar = document.getElementById('bar') as HTMLElement;

    if (completionBar === null) return;

    completionBar.style.width = `${flagsGuessed / totalFlags * 100}%`;
    completionBar.innerText = `${flagsGuessed}/${totalFlags}`;
}

export function newRound(countryList: Array<string>): void {
    countriesToGuess = countryList;

    totalFlags = countriesToGuess.length;
    flagsGuessed = 0;

    updateBar();
    visibility('.game-button', false);

    continueRound();
}

export function continueRound(): void {
    const picks = getRandomFlags(maximumFlagOptions);

    if (picks.length === 0) {
        setText('Congratulations! You guessed all flags!');

        visibility('.game-button', true);

        return;
    }

    correctPick = choice(picks);
    
    setText(`Pick the correct flag for ${countries[correctPick]}.`);

    picks.forEach((pick) => {
        showFlag(pick);
    });
}