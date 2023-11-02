<template>
	<div
		class="mobile-nav absolute top-0 left-0 w-full h-[100svh] -translate-y-[200%] opacity-0 bg-cover bg-no-repeat z-10 flex items-center justify-center"
		:class="{ active: props.modelValue }"
	>
		<RouterLink to="/login">
			<button class="p-[5px] absolute top-[18px] left-[10px]">
				<img src="../../assets/Icons/user2.svg" alt="user icon" />
			</button>
		</RouterLink>
		<ul class="space-y-[16px] text-center font-medium">
			<li
				@click="closeNav"
				class="text-[32px] text-[#C2D9FF] uppercase -translate-y-[800px] transition-transform duration-[1500ms] delay-[100ms]"
			>
				<a href="#about-us">o nas</a>
			</li>
			<li
				@click="closeNav"
				class="text-[32px] text-[#C2D9FF] uppercase -translate-y-[800px] transition-transform duration-[1500ms] delay-[200ms]"
			>
				<a href="#instructors">instruktorzy</a>
			</li>
			<li
				@click="closeNav"
				class="text-[32px] text-[#C2D9FF] uppercase -translate-y-[800px] transition-transform duration-[1500ms] delay-[300ms]"
			>
				<a href="#gallery">galeria</a>
			</li>
			<!-- <li
				@click="closeNav"
				class="text-[32px] text-[#C2D9FF] uppercase -translate-y-[800px] transition-transform duration-[1500ms] delay-[400ms]"
			>
				<a href="#opinion">opinie</a>
			</li> -->
			<li
				@click="closeNav"
				class="text-[32px] text-[#C2D9FF] uppercase -translate-y-[800px] transition-transform duration-[1500ms] delay-[500ms]"
			>
				<a href="#contact">kontakt</a>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

//props
const props = defineProps({
	modelValue: {
		type: Boolean,
	},
})

//const emits
const emit = defineEmits(['update:modelValue'])

//function for closing movile navigation
const closeNav = () => {
	emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
.mobile-nav {
	transition: transform 1s, opacity 1s;
	background-image: url('../../assets/BgImages/wave-menu.svg');
}
.active {
	transform: translateY(0);
	opacity: 1;

	li {
		transform: translateY(0);
	}
}
</style>
