<template>
    <button @click="handleClick" :id="name" class="game-button border-2 m-2 p-2 rounded-lg hover:bg-sun hover:scale-105 transition-all">{{ name }}</button>
</template>

<script lang="ts">
import { gameTypes } from '../countries';
import { newRound } from '../game';

export default {
    props: {
        name: String
    },
    methods: {
        handleClick(ev: MouseEvent) {
            const target = ev.target as HTMLElement;

            const countryList = gameTypes[target.id];

            newRound(Object.keys(countryList));
        }
    }
}
</script>