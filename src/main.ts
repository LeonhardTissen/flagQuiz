import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { gameRunning, startedAt } from './game';
createApp(App).mount('#app');

let timer: null | HTMLElement = null;

function formatMilliseconds(milliseconds: number): string {
    const date = new Date(milliseconds);
    const minutes = date.getUTCMinutes().toString();
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const millisecondsString = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${minutes}:${seconds}.${millisecondsString}`;
}

function update() {
    if (timer !== null && gameRunning) {
        timer.innerText = formatMilliseconds(performance.now() - startedAt);
    }

    window.requestAnimationFrame(update);
}

window.onload = () => {
    timer = document.getElementById('timer') as HTMLElement;

    update();
}