<template>
	<header class="relative header h-[100svh] w-full flex flex-col items-center justify-center bg-no-repeat bg-cover">
		<div class="shadow inset-0 absolute bg-[#375D9C]/50"></div>
		<h1 class="z-[1] text-white font-bold text-[40px] text-center lg:text-[55px]">Rekinek Kąty Wrocławskie</h1>

		<nav class="absolute top-0 left-0 w-full flex flex-row-reverse px-[15px] py-[15px]">
			<BurgerBtnComponent v-model="isActive" class="lg:hidden" />
		</nav>

		<a
			href="#about-us"
			class="absolute arrow bottom-[2px] border-2 rounded-full w-[70px] h-[70px] bg-no-repeat bg-center animate-bounce"
		>
		</a>

		<DesktopNavigationComponent class="hidden lg:flex"> </DesktopNavigationComponent>
	</header>
	<MobileNavigationComponent v-model="isActive" @wheel.prevent @touchmove.prevent @scroll.prevent />
</template>

<script setup>
import { ref } from 'vue'
import BurgerBtnComponent from './BurgerBtnComponent.vue'
import MobileNavigationComponent from './MobileNavigationComponent.vue'
import DesktopNavigationComponent from './DesktopNavigationComponent.vue'

const isActive = ref(false)
</script>

<style lang="scss" scoped>
.arrow {
	background-image: url('../../assets/Icons/arrow-down.svg');
}

.header {
	background-image: url('../../assets/Images/swimming-pool-sm.jpg');
}

.header {
	h1 {
		opacity: 0;
		animation: showHeader 3s forwards;
	}
}

//keyframes
@keyframes showHeader {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@media (min-width: 1024px) {
	.header {
		background-image: url('../../assets/Images/swimming-pool-lg.jpg');
	}
}
</style>
