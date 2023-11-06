<template>
	<div class="bg-fire absolute top-0 left-0 w-full min-h-full">
		<h1 id="text" class="text-center text-4xl m-20"></h1>
		<div id="countries" class="flex flex-wrap gap-2 justify-center">
			<CountryComponent v-for="(country, code) in countries" :key="code" :code="code" :name="country" />
		</div>
	</div>
</template>

<script lang="ts">
import CountryComponent from './components/CountryComponent.vue';
import { countries } from './countries';

export default {
	name: 'App',
	components: {
		CountryComponent
	},
	data() {
		return {
			countries
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
