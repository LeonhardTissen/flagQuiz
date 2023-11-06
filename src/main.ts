import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { startRound } from './game';

createApp(App).mount('#app');

window.onload = () => {
    startRound();
}
