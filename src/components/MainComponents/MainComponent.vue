<template>
	<main class="main bg-center bg-cover bg-no-repeat pb-[32px]">
		<AboutUsComponent />
		<InstructosComponent />
		<GalerryComponent />
		<ContactComponent />
	</main>
</template>

<script setup>
import AboutUsComponent from './AboutUsComponent.vue'
import InstructosComponent from './InstructosComponent.vue'
import GalerryComponent from './GalleryComponent.vue'
import ContactComponent from './ContactComponent.vue'
</script>

<style lang="scss" scoped>
.main {
	background-image: url('../../assets/BgImages/wave-sm.svg');
}
</style>
