<template>
    <div :id="code" @click="handleClick" class="country-component w-40 h-40 justify-around flex-col items-center border-2 rounded-lg transition-all border-white cursor-pointer hover:bg-sun hover:scale-105 hidden">
        <div class="flag pointer-events-none">
            <img :src="require(`../assets/imgs/svg/${code?.toLowerCase()}.svg`)" :alt="name" class="w-20" />
        </div>
        <div class="name hidden pointer-events-none text-l text-center text-zinc-200">{{ name }}</div>
    </div>
</template>
  
<script lang="ts">
import { guessFlag } from '../game';

export default {
    props: {
        code: String,
        name: String
    },
    methods: {
        handleClick(ev: MouseEvent) {
            const target = ev.target as HTMLElement;
            guessFlag(target.id);
        }
    }
};
</script>