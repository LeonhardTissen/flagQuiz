import { countries } from "./countries";
import { choice } from "./random";

let countriesToGuess = Object.keys(countries);

function fiveRandomFlags(): Array<string> {
    const picks: Set<string> = new Set();
    while (picks.size < 5) {
        picks.add(choice(countriesToGuess))
    }
    return Array.from(picks);
}

function showFlag(countryCode: string): void {
    const flag = document.getElementById(countryCode);
    if (flag === null) return;
    flag.style.display = 'flex';
}

function hideAllFlags(): void {
    document.querySelectorAll<HTMLElement>('.country-component').forEach((element) => {
        element.style.display = 'none';
    });
}

let correctPick: null | string = null;

export function guessFlag(guessPick: string): void {
    
    const isCorrect = guessPick === correctPick;
    
    setText(isCorrect ? 'That\'s correct!' : 'That\'s wrong.');
    
    if (isCorrect) {
        setText('That\'s correct!');
        countriesToGuess = countriesToGuess.filter((c) => c !== correctPick);
        hideAllFlags();
        console.log(countriesToGuess);
        setTimeout(startRound, 1000);
    } else {
        setText(`That's wrong. You picked ${countries[guessPick]}.`);


        setTimeout(hideAllFlags, 2500);
        setTimeout(startRound, 3000);
    }

}

function setText(text: string) {
    const topText = document.getElementById('text') as HTMLElement;
    topText.innerText = text;
}

export function startRound(): void {
    const picks = fiveRandomFlags();
    correctPick = choice(picks);
    
    setText(`Pick the correct flag for ${countries[correctPick]}.`);

    picks.forEach((pick) => {
        showFlag(pick);
    });
}