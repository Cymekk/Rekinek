<template>
	<section class="section gallery" id="gallery" :class="{ active: animationStart }">
		<h2 class="title translate-y-[300px] opacity-0">Galeria</h2>
		<div
			class="img-box relative h-[235px] translate-y-[300px] opacity-0 md:w-[80%] md:h-[300px] md:mx-auto lg:h-[350px] lg:w-[800px] xl:h-[530px]"
		>
			<div
				class="img-container rounded-md h-full overflow-hidden absolute inset-0 object-contain"
				v-for="(img, index) in carouselImages"
				:key="index"
			>
				<Transition>
					<img v-if="currentImage == index + 1" :src="img" :alt="`Zdjęcie nr ${index + 1}`" />
				</Transition>
			</div>
			<button
				class="absolute left top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-[#184A99] rounded-full bg-no-repeat bg-center"
				@click="prevImg()"
			></button>
			<button
				class="absolute right top-1/2 -translate-y-1/2 right-0 w-[40px] h-[40px] bg-[#184A99] rounded-full bg-no-repeat bg-center"
				@click="nextImg()"
			></button>
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
	const gallery = document.querySelector('.gallery')

	document.addEventListener('scroll', () => {
		if (gallery.offsetTop <= window.scrollY + window.innerHeight - 200) {
			animationStart.value = true
		} else {
			animationStart.value = false
		}
	})
})

//Carousel
const carouselImages = ['./Images/img1.jpg', './Images/img2.jpg', './Images/img3.jpg']

const currentImage = ref(1)

const nextImg = () => {
	if (currentImage.value === carouselImages.length) {
		currentImage.value = 1
	} else {
		currentImage.value++
	}
}
const prevImg = () => {
	if (currentImage.value === 1) {
		currentImage.value = carouselImages.length
	} else {
		currentImage.value--
	}
}
</script>

<style lang="scss" scoped>
.active {
	h2,
	div {
		transform: translateY(0);
		opacity: 1;
		transition: transform 1.5s, opacity 1.5s;
	}

	div {
		transition-delay: 200ms;
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease, transform 0.5s ease;
}

.v-enter-from {
	transform: translateX(100%);
	opacity: 0;
}
.v-enter-to {
	transform: translateX(0);
	opacity: 1;
}

.v-leave-to {
	transform: translateX(-100%);
	opacity: 0;
}
.v-leave-from {
	transform: translateX(0);
	opacity: 1;
}

.left {
	background-image: url('../../assets/Icons/chevron-left.svg');
}
.right {
	background-image: url('../../assets/Icons/chevron-right.svg');
}
</style>
