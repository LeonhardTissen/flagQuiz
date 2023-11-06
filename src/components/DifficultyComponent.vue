<template>
    <button @click="handleClick" :id="name" class="game-button difficulty-button disabled:opacity-50 disabled:pointer-events-none border-2 m-2 p-2 rounded-lg hover:bg-sun hover:scale-105 disabled:scale-110 transition-all">{{ name }}</button>
</template>

<script lang="ts">
import { setMaximumFlagOptions } from '@/game';

export default {
    props: {
        name: String,
    },
    methods: {
        handleClick(ev: MouseEvent) {
            const target = ev.target as HTMLElement;

            const amount = target.getAttribute('amount');

            if (amount === null) return;

            document.querySelectorAll<HTMLElement>('.difficulty-button').forEach((element) => {
                element.removeAttribute('disabled');
            });

            target.setAttribute('disabled', 'true');

            const amountInt = parseInt(amount);

            setMaximumFlagOptions(amountInt);
        }
    }
}
</script>