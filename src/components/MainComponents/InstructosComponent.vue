<template>
	<section class="section instructors" id="instructors" :class="{ active: animationStart }">
		<h2 class="title translate-y-[300px] opacity-0">Instruktorzy</h2>

		<!-- mobile -->
		<div class="mobile md:hidden">
			<div class="box first relative mb-[24px] overflow-hidden rounded-md translate-y-[300px] opacity-0">
				<img src="../../assets/Images/face.jpg" alt="" />
				<button
					class="help-circle w-[40px] h-[40px] bg-no-repeat bg-center absolute right-0 top-0 cursor-crosshair z-10"
				></button>

				<div
					class="other-side rounded-md absolute inset-0 flex flex-col justify-end items-center text-white bg-black/50 p-[15px]"
				>
					<p class="font-bold text-[26px]">Łukasz</p>
					<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, non.</span>
				</div>
			</div>
			<div class="box second relative mb-[24px] translate-y-[300px] opacity-0">
				<img src="../../assets/Images/face.jpg" alt="" class="rounded-md" />
				<button
					class="help-circle w-[40px] h-[40px] bg-no-repeat bg-center absolute right-0 top-0 cursor-crosshair z-10"
				></button>
				<div
					class="other-side rounded-md absolute inset-0 flex flex-col justify-end items-center text-white bg-black/50 p-[15px]"
				>
					<p class="font-bold text-[26px]">Łukasz</p>
					<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, non.</span>
				</div>
			</div>
			<div class="box third relative translate-y-[300px] opacity-0">
				<img src="../../assets/Images/face.jpg" alt="" class="rounded-md" />
				<button
					class="help-circle w-[40px] h-[40px] bg-no-repeat bg-center absolute right-0 top-0 cursor-crosshair z-10"
				></button>
				<div
					class="other-side rounded-md absolute inset-0 flex flex-col justify-end items-center text-white bg-black/50 p-[15px]"
				>
					<p class="font-bold text-[26px]">Łukasz</p>
					<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, non.</span>
				</div>
			</div>
		</div>

		<!-- desktop -->
		<div class="desktop hidden md:block space-y-[32px]">
			<!-- instructor Łukasz -->
			<div class="box first rounded-md flex items-center space-x-[32px]">
				<div class="text-box text-[#C2D9FF] flex flex-col space-y-[16px] -translate-x-[500px] opacity-0">
					<p class="font-bold text-[32px] text-center">Instruktor Łukasz</p>
					<span
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde amet, facere libero repellat assumenda
						deleniti? Architecto suscipit velit non?</span
					>
				</div>
				<img
					src="../../assets/Images/face.jpg"
					alt="instruktor Łukasz"
					class="rounded-md w-1/2 translate-x-[500px] opacity-0"
				/>
			</div>

			<!-- instructora Wanda -->
			<div class="box second rounded-md flex items-center space-x-[32px]">
				<img
					src="../../assets/Images/face.jpg"
					alt="instruktor Łukasz"
					class="rounded-md w-1/2 opacity-0 -translate-x-[500px]"
				/>
				<div class="text-box text-[#C2D9FF] flex flex-col space-y-[16px] opacity-0 translate-x-[500px]">
					<p class="font-bold text-[32px] text-center">Instruktorka Wanda</p>
					<span
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde amet, facere libero repellat assumenda
						deleniti? Architecto suscipit velit non?</span
					>
				</div>
			</div>

			<!-- instructor Michał -->
			<div class="box third rounded-md flex items-center space-x-[32px]">
				<div class="text-box text-[#C2D9FF] flex flex-col space-y-[16px] opacity-0 -translate-x-[500px]">
					<p class="font-bold text-[32px] text-center">Instruktor Michał</p>
					<span
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde amet, facere libero repellat assumenda
						deleniti? Architecto suscipit velit non?</span
					>
				</div>
				<img
					src="../../assets/Images/face.jpg"
					alt="instruktor Łukasz"
					class="rounded-md w-1/2 opacity-0 translate-x-[500px]"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
//imports
import { ref, onMounted } from 'vue'

//variable handling animation
const animationStart = ref(false)

//checking that section is on screen
onMounted(() => {
	const instructors = document.querySelector('.instructors')

	document.addEventListener('scroll', () => {
		if (instructors.offsetTop <= window.scrollY + window.innerHeight - 150) {
			animationStart.value = true
		} else {
			animationStart.value = false
		}
	})
})
</script>

<style lang="scss" scoped>
button:hover ~ .other-side {
	clip-path: circle(150%);
}

.other-side {
	clip-path: circle(0 at 50% 100%);
	transition: clip-path 1s;
}

.active {
	h2,
	.box {
		opacity: 1;
		transform: translateY(0);
		transition-duration: 1s;
	}

	.first {
		transition-delay: 200ms;
	}
	.second {
		transition-delay: 400ms;
		.text-box,
		img {
			transition-delay: 400ms;
		}
	}
	.third {
		transition-delay: 600ms;
		.text-box,
		img {
			transition-delay: 600ms;
		}
	}

	.text-box,
	img {
		opacity: 1;
		transform: translateX(0);
		transition-duration: 1s;
	}
}

.help-circle {
	background-image: url('../../assets/Icons/help.svg');
}
</style>
