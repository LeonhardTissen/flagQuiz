<template>
	<div class="bg-fire absolute top-0 left-0 w-full min-h-full">
		<h1 id="text" class="text-center text-4xl m-20">Welcome to Flag Quiz!</h1>
		<div id="games" class="text-center">
			<div id="modes" class="flex justify-center">
				<GameComponent v-for="(_, game) in gameTypes" :key="game" :code="game" :name="game" />
			</div>
			<hr class="w-80 m-auto border-sun border-2 rounded-lg my-4">
			<div id="difficulties" class="flex justify-center">
				<DifficultyComponent v-for="(amount, difficulty) in difficulties" :key="difficulty" :code="difficulty" :name="difficulty" :amount="amount"/>
			</div>
		</div>
		<div id="countries" class="flex flex-wrap gap-2 justify-center">
			<CountryComponent v-for="(country, code) in countries" :key="code" :code="code" :name="country" />
		</div>
		<div id="bar" class="bg-sun h-10 w-0 fixed bottom-0 left-0 transition-all flex items-center text-3xl">0/?</div>
	</div>
</template>

<script lang="ts">
import CountryComponent from './components/CountryComponent.vue';
import GameComponent from './components/GameComponent.vue';
import DifficultyComponent from './components/DifficultyComponent.vue';
import { countries, gameTypes } from './countries';
import { difficulties } from './difficulties';

export default {
	name: 'App',
	components: {
		CountryComponent,
		GameComponent,
		DifficultyComponent
	},
	data() {
		return {
			countries,
			gameTypes,
			difficulties
		}
	}
}
</script>

<style>
@font-face {
	font-family: Geist;
	src: url(./assets/fonts/GeistVF.woff2) format(woff2);
}
#app {
	font-family: Geist, Helvetica, Arial, sans-serif;
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
