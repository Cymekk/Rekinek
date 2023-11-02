<template>
	<div
		class="note h-auto w-[80%] md:w-[45%] lg:w-[30%] xl:w-[20%] bg-[#7295CC] rounded-md overflow-hidden text-white font-medium"
	>
		<div class="note-header flex justify-between bg-[#4469A6] p-2">
			<h3>{{ message.title }}</h3>
			<button @click="changeStatus(message.id, message.done)">
				<img src="../../assets/Icons/check.svg" alt="check icon" class="w-[20px]" />
			</button>
		</div>
		<div class="note-text p-2">
			<p>{{ message.message }}</p>
			<p>Numer telefonu: {{ message.phoneNumber }}</p>
		</div>
	</div>
</template>

<script setup>
//imports
import { useStoreNotes } from '../../stores/storeNotes'

//stores
const storeNotes = useStoreNotes()

//props
const props = defineProps({
	message: {
		type: Object,
	},
})

//function which changing note status
const changeStatus = (id, status) => {
	storeNotes.updateMessage(id, status)
}
</script>

<style lang="scss" scoped></style>
