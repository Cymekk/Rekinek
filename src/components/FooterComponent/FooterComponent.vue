<template>
	<footer class="footer w-full bg-[#184A99]">
		<div class="container px-[15px] pt-6 text-[#C2D9FF] text-center space-y-[12px]">
			<div class="phone flex flex-row justify-center items-center">
				<img src="../../assets/Icons/phone.svg" alt="phone icon" />
				<span class="pl-[5px]">123 456 789</span>
			</div>
			<div class="mail flex flex-row justify-center items-center">
				<img src="../../assets/Icons/at-sign.svg" alt="at icon" />
				<span class="pl-[5px]">test@test.com</span>
			</div>

			<span class="block">&copy MC {{ year }}</span>
		</div>
	</footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped></style>
