<template>
	<div class="relative login-body h-[100svh] bg-cover flex items-center justify-center">
		<button class="absolute z-20 top-[15px] left-[15px] p-[5px]" @click="router.push('/')">
			<img src="../assets/Icons/home.svg" alt="home icon" />
		</button>
		<div class="shadow absolute inset-0 bg-[#184A99]/50"></div>
		<div class="login-box relative w-4/5 max-w-[400px] bg-[#184A99] rounded-lg p-[24px] z-20 overflow-hidden">
			<h2 class="tracking-[2px] font-medium text-center text-[#C2D9FF] mb-[24px] text-[32px]">{{ props.title }}</h2>
			<form class="input-and-btn space-y-[16px]" @submit.prevent>
				<slot name="form"></slot>
			</form>
			<div class="links text-[#C2D9FF] mt-[16px] space-y-[16px]">
				<slot name="links"></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
	title: {
		type: String,
	},
})
</script>

<style lang="scss" scoped>
.login-box::after {
	content: '';
	position: absolute;
	top: 0;
	left: 55%;
	width: 150%;
	height: 100%;
	background-color: #375d99;
	transform: skew(15deg);
	z-index: -1;
}

.login-box {
	box-shadow: 0 0 2px #fff;
}

.login-body {
	background-image: url('../assets/Images/swimming-pool-sm.jpg');
}

@media (min-width: 1024px) {
	.login-body {
		background-image: url('../assets/Images/swimming-pool-lg.jpg');
	}
}
</style>
