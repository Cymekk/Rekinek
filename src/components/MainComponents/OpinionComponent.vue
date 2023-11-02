<template>
	<section class="section opinions" id="opinion" :class="{ active: animationStart }">
		<h2 class="title translate-y-[300px] opacity-0">Opinie</h2>
		<div class="opinion-box p-[16px] bg-opinionBox rounded-md text-black translate-y-[300px] opacity-0">
			<div class="opinion-header flex flex-row justify-between text-[26px] font-bold">
				<p>Marcin</p>
				<p>5/5</p>
			</div>
			<div class="opinion-text pt-[16px]">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium unde culpa deleniti officiis deserunt
					illo?
				</p>
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
	const opinions = document.querySelector('.opinions')

	document.addEventListener('scroll', () => {
		if (opinions.offsetTop <= window.scrollY + window.innerHeight - 150) {
			animationStart.value = true
		} else {
			animationStart.value = false
		}
	})
})
</script>

<style lang="scss" scoped>
.active {
	h2,
	.opinion-box {
		transform: translateY(0);
		opacity: 1;
		transition: transform 1.5s, opacity 1.5s;
	}

	.opinion-box {
		transition-delay: 200ms;
	}
}
</style>
