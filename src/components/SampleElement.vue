<template>
	<div id="sample" class="text-charcoal-300 text-3xl m-20 text-center">{{ msg }}</div>
</template>
  
<script lang="ts">
export default {
	name: 'SampleElement',
	props: {
		msg: String
	}
}
</script>
	
<style scoped>

</style>
  