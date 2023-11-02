<template>
	<nav
		class="navigation absolute top-0 left-0 h-[10svh] w-full flex justify-end items-center uppercase font-bold text-white pr-[32px] text-[22px]"
	>
		<a href="#about-us" class="links relative px-6 py-3 z-10 hover:text-[#ACC7F2] transition-colors duration-300"
			>o nas</a
		>
		<a href="#instructors" class="links relative p-[10px] z-10 hover:text-[#ACC7F2] transition-colors duration-300"
			>instruktorzy</a
		>
		<a href="#gallery" class="links relative p-[10px] z-10 hover:text-[#ACC7F2] transition-colors duration-300"
			>galeria</a
		>
		<a href="#contact" class="links relative p-[10px] z-10 hover:text-[#ACC7F2] transition-colors duration-300"
			>kontakt</a
		>
		<button @click="router.push('/login')"><img src="../../assets/Icons/user3.svg" alt="" /></button>
	</nav>
</template>

<script setup>
//imports
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.links::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 3px;
	background-color: #2b518c;
	z-index: -1;
	border-radius: 5px;
	opacity: 0;
	transition: height 0.3s;
}

.links:hover::after {
	opacity: 1;
	height: 100%;
}

.navigation {
	transform: translateY(-500px);
	opacity: 0;
	animation: showNav 2s forwards;
}

@keyframes showNav {
	from {
		opacity: 0;
		transform: translateY(-500px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
