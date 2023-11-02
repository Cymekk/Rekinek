<template>
	<div
		class="shadow fixed inset-0 bg-black/50 flex items-center justify-center -translate-y-[150%] transition-transform duration-500"
		:class="{ 'popup-active': props.modelValue }"
	>
		<div
			class="popup relative w-4/5 max-w-[500px] bg-[#184A99] rounded-lg p-[32px] flex flex-col items-center space-y-[32px]"
			ref="targetRef"
		>
			<img src="../../assets/Icons/check.svg" alt="check icon" class="bg-[#375D99] rounded-full w-[200px]" />
			<p class="mt-[12px] text-[#C2D9FF] font-medium">
				Dziękuje za wiadomość, postaram się odpowiedzieć jak najszybciej.
			</p>
			<button
				@click="closePopup"
				class="bg-[#C2D9FF] px-8 py-4 text-[#184A99] font-bold rounded-lg hover:bg-[#375D99] hover:text-[#C2D9FF] transition-colors duration-300"
			>
				OK
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
	modelValue: {
		type: Boolean,
	},
})

const emit = defineEmits(['update:modelValue'])

const closePopup = () => {
	emit('update:modelValue', false)
}

const targetRef = ref(null)

onClickOutside(targetRef, () => closePopup())
</script>

<style lang="scss" scoped>
.popup-active {
	transform: translateY(0);
}
</style>
