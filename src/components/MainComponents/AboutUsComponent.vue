<template>
	<section class="about-us section" id="about-us" :class="{ active: animationStart }">
		<h2 class="title translate-y-[300px] opacity-0">o nas</h2>

		<!-- mobile box -->
		<div class="about-us-box mobile md:hidden">
			<p class="text translate-y-[300px] delay-[3s] opacity-0">
				Nasza szkółka została założona w 2021 roku, mimo krótkiego czasu na rynku nasza kadra instruktorska jest bardzo
				doświadczona i profesjonalna. Nasza oferta jest skierowana do najmłodszych, zapraszamy wszystkie dzieci które
				chcą nauczyć się pływać jak i te dzieci które pierwszy pływackie szlify mają już za sobą.
			</p>

			<img
				src="../../assets/Images/swimming-skill.jpg"
				alt=""
				class="mt-[24px] rounded-md translate-y-[300px] delay-[200ms] opacity-0"
			/>
			<p class="text pt-[24px] translate-y-[300px] delay-[300ms] opacity-0">Zalety pływania u dzieci:</p>
			<ul class="text pt-[6px] list-disc pl-[15px] translate-y-[300px] delay-[400ms] opacity-0">
				<li class="py-[2px]">Pomaga dbać o prawidłową postawę dziecka oraz koryguje wady postawy</li>
				<li class="py-[2px]">Wzmacnia mięśnie, buduje</li>
				<li class="py-[2px]">Hartuje i wzmacnia odporność</li>
				<li class="py-[2px]">Jest doskonałą profilaktyką przeciw otyłości i nadwadze</li>
				<li class="py-[2px]">Daje upust nadmiarowi energii</li>
			</ul>
		</div>

		<!-- desktop box -->
		<div class="about-us-box mobile hidden md:block">
			<div class="box flex items-center space-x-[32px]">
				<p class="text -translate-x-[500px] delay-[3s] opacity-0 md:max-w-prose leading-[160%] lg:text-[18px]">
					Nasza szkółka została założona w 2021 roku, mimo krótkiego czasu na rynku nasza kadra instruktorska jest
					bardzo doświadczona i profesjonalna. Nasza oferta jest skierowana do najmłodszych, zapraszamy wszystkie dzieci
					które chcą nauczyć się pływać jak i te dzieci które pierwszy pływackie szlify mają już za sobą.
				</p>

				<img
					src="../../assets/Images/swimming-skill.jpg"
					alt=""
					class="rounded-md translate-x-[500px] delay-[200ms] opacity-0 md:w-[50%] md:mt-0 xl:w-[45%]"
				/>
			</div>

			<div class="box flex space-x-[32px] mt-[32px]">
				<img
					src="../../assets/Images/swimming-learn.jpg"
					alt=""
					class="rounded-md -translate-x-[500px] delay-[200ms] opacity-0 md:w-[50%] xl:w-[45%]"
				/>
				<div class="text flex translate-x-[500px] flex-col justify-center">
					<p class="text pt-[24px] opacity-0 lg:text-[22px] mb-[16px]">Zalety pływania u dzieci:</p>
					<ul class="text pt-[6px] list-disc pl-[15px] opacity-0 lg:text-[18px] lg:space-y-2">
						<li class="py-[2px]">Pomaga dbać o prawidłową postawę dziecka oraz koryguje wady postawy</li>
						<li class="py-[2px]">Wzmacnia mięśnie, buduje</li>
						<li class="py-[2px]">Hartuje i wzmacnia odporność</li>
						<li class="py-[2px]">Jest doskonałą profilaktyką przeciw otyłości i nadwadze</li>
						<li class="py-[2px]">Daje upust nadmiarowi energii</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const animationStart = ref(false)
onMounted(() => {
	const aboutUs = document.querySelector('.about-us')

	document.addEventListener('scroll', () => {
		if (aboutUs.offsetTop <= window.scrollY + window.innerHeight - 150) {
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
	.text,
	img {
		transform: translateY(0);
		opacity: 1;
		transition: transform 1.5s, opacity 1.5s;
	}
	h2 {
		transition-delay: 100ms;
	}
	.text {
		transition-delay: 400ms;
	}
	img {
		transition-delay: 600ms;
	}
}
</style>
