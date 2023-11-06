<template>
	<div class="bg-slate-600 text-blue-100 absolute top-0 left-0 w-full min-h-full flex items-center flex-col justify-center">
		<h1 id="text" class="text-center text-4xl m-20">
			Welcome to <span class="text-yellow-200">Flag Quiz</span>!
		</h1>
		<div id="games" class="text-center">
			<div id="modes" class="flex justify-center flex-wrap">
				<GameComponent v-for="(_, game) in gameTypes" :key="game" :code="game" :name="game" />
			</div>
			<hr class="game-button m-auto border-charcoal border-2 rounded-lg my-4" style="width: 80%">
			<div id="difficulties" class="flex justify-center flex-wrap">
				<DifficultyComponent v-for="(amount, difficulty) in difficulties" :key="difficulty" :code="difficulty" :name="difficulty" :amount="amount"/>
			</div>
		</div>
		<div id="countries" class="flex flex-wrap gap-2 justify-center mb-10">
			<CountryComponent v-for="(country, code) in countries" :key="code" :code="code" :name="country" />
		</div>
		<div id="bar" class="bg-charcoal text-yellow-200 h-10 w-0 fixed bottom-0 left-0 transition-all flex items-center text-3xl"></div>
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
	font-weight: 180;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
