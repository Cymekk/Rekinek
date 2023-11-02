<template>
	<div class="notes-container min-h-[100svh] bg-[#184A99] relative">
		<div class="container">
			<div class="navigation relative flex justify-center items-center pt-10 space-x-8">
				<span
					class="text-[#97B5E5] font-medium text-[18px] cursor-pointer"
					:class="{ underline: selected }"
					@click="selected = true"
					>Nowe</span
				>
				<span
					class="text-[#97B5E5] font-medium text-[18px] cursor-pointer"
					:class="{ underline: !selected }"
					@click="selected = false"
					>Ukończone</span
				>
				<button class="rounded-md font-medium text-[#214580] hover:text-[#97B5E5]" @click="logout">
					<img src="../assets/Icons/log-out.svg" alt="" />
				</button>
			</div>

			<!-- new messages -->
			<div
				v-if="selected"
				class="container new-notes flex flex-row justify-center gap-[24px] flex-wrap md:flex-row mt-[24px]"
			>
				<p v-if="newMessages.length === 0" class="mt-4 text-center font-bold text-[20px] text-[#97B5E5]">
					Brak nowych wiadomości
				</p>
				<NoteComponent v-for="message in newMessages" :key="message.id" :message="message" />
			</div>

			<!-- old messages -->
			<div
				v-if="!selected"
				class="container old-notes flex flex-row justify-center gap-[24px] flex-wrap md:flex-row mt-[24px]"
			>
				<p v-if="oldMessages.length === 0" class="mt-4 text-center font-bold text-[20px] text-[#97B5E5]">
					Brak wiadomości
				</p>
				<NoteComponent v-for="message in oldMessages" :key="message.id" :message="message" />
			</div>
		</div>
	</div>
</template>

<script setup>
//imports
import { computed, onMounted, ref } from 'vue'
import { useStoreAuth } from '../stores/storeAuth'
import { useStoreNotes } from '../stores/storeNotes'
import NoteComponent from '../components/NotesComponents/NoteComponent.vue'

//stores
const storeAuth = useStoreAuth()
const storeNotes = useStoreNotes()

//notes from firebase
const newMessages = computed(() => {
	return storeNotes.notes.filter(el => el.done == false)
})

const oldMessages = computed(() => {
	return storeNotes.notes.filter(el => el.done == true)
})

//logout function
const logout = () => {
	storeAuth.logoutUser()
}

//variable which handling "new/old messages" sections
const selected = ref(true)
</script>

<style lang="scss" scoped></style>
