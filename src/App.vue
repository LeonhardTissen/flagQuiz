<template>
	<div class="bg-fire absolute top-0 left-0 w-full h-full">
		<SampleElement msg="Hello, World!"/>
	</div>
</template>

<script lang="ts">
import SampleElement from './components/SampleElement.vue';

export default {
	name: 'App',
	components: {
		SampleElement
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
	font-weight: 100;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
