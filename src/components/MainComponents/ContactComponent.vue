<template>
	<section class="section contact" id="contact" :class="{ animation: animationStart }">
		<h2 class="title translate-y-[150px] opacity-0">kontakt</h2>

		<div class="contanct-container md:w-[80%] md:mx-auto lg:w-[800px]">
			<!-- name and surname input box -->
			<div
				class="input-box first relative mb-[32px] translate-y-[150px] opacity-0"
				:class="{ inputError: v$.name.$error }"
			>
				<label
					class="absolute top-1/2 -translate-y-1/2 left-[10px] font-medium text-zinc-500 transition-transform duration-300"
					:class="{ active: nameInput }"
					>Imie i nazwisko</label
				>
				<input
					type="text"
					class="p-2 w-full rounded-md outline-none bg-white"
					@focusin="nameInput = true"
					@focusout="checkFirstInput"
					v-model="inputsDetails.name"
				/>
			</div>
			<span class="errorMsg" v-if="v$.name.$error">Pole imie i nazwisko nie może być puste</span>

			<!-- phone number input box -->
			<div
				class="input-box third relative mb-[32px] translate-y-[150px] opacity-0"
				:class="{ inputError: v$.phoneNumber.$error }"
			>
				<label
					class="absolute top-1/2 -translate-y-1/2 left-[10px] font-medium text-zinc-500 transition-transform duration-300"
					:class="{ active: phoneInput }"
					>Numer telefonu</label
				>
				<input
					type="number"
					class="p-2 w-full rounded-md outline-none bg-white"
					@focusin="phoneInput = true"
					@focusout="checkSecondInput"
					v-model="inputsDetails.phoneNumber"
				/>
			</div>
			<span class="errorMsg" v-if="v$.phoneNumber.$error"
				>Niepoprawny numer telefonu(Numer telefonu powinien składać się z 9 cyfr)</span
			>

			<!-- message input box -->
			<div class="input-box fourth relative translate-y-[150px] opacity-0" :class="{ inputError: v$.message.$error }">
				<label
					class="absolute top-0 translate-y-[5px] left-[10px] font-medium text-zinc-500 transition-transform duration-300"
					:class="{ 'textarea-active': msgInput }"
					>Wiadomość</label
				>
				<textarea
					class="w-full block resize-none p-2 rounded-md outline-none bg-white"
					@focusin="msgInput = true"
					@focusout="checkThirdInput"
					@keyup="resizeTextArea($event)"
					v-model="inputsDetails.message"
				></textarea>
			</div>
			<span class="errorMsg" v-if="v$.message.$error">Wiadomość nie może być pusta</span>
		</div>

		<button
			class="bg-[#C2D9FF] block px-8 py-4 mt-[32px] mx-auto rounded-md text-[#184A99] font-medium hover:bg-[#375D99] hover:text-[#C2D9FF] translate-y-[150px] opacity-0 transition-transform-colors duration-300"
			@click="sendMail"
		>
			Wyślij
		</button>
	</section>
	<MailPopupComponent @wheel.prevent @touchmove.prevent @scroll.prevent v-model="emailSend" />
</template>

<script setup>
//imports
import { computed, reactive, ref, onMounted } from 'vue'
import { required, minLength, maxLength } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'
import MailPopupComponent from './MailPopupComponent.vue'
import { useStoreNotes } from '../../stores/storeNotes'

//store
const storeNotes = useStoreNotes()

//variables which handling "labels" animation
const nameInput = ref(false)
const phoneInput = ref(false)
const msgInput = ref(false)

//functions which checking that input is empty or not on focus out event
const checkFirstInput = () => {
	if (inputsDetails.name === '' || inputsDetails.name === ' ') {
		nameInput.value = false
	}
}

const checkSecondInput = () => {
	if (inputsDetails.phoneNumber === '' || inputsDetails.phoneNumber === ' ') {
		phoneInput.value = false
	}
}

const checkThirdInput = () => {
	if (inputsDetails.message === '' || inputsDetails.message === ' ') {
		msgInput.value = false
	}
}

const checkInputs = () => {
	checkFirstInput()
	checkSecondInput()
	checkThirdInput()
}

const resizeTextArea = e => {
	e.target.style.height = `${e.target.scrollHeight}px`
}

//reactive variable which stores contact form details
const inputsDetails = reactive({
	name: '',
	phoneNumber: '',
	message: '',
})

// rules for validation
const rules = computed(() => {
	return {
		name: {
			required,
		},
		phoneNumber: {
			required,
			minLength: minLength(9),
			maxLength: maxLength(9),
		},
		message: {
			required,
		},
	}
})

const v$ = useValidate(rules, inputsDetails)

//validation mail
const emailSend = ref(false)

const sendMail = () => {
	v$.value.$validate()
	if (!v$.value.$error) {
		emailSend.value = true
		storeNotes.addNewNote(inputsDetails)
		v$.value.$reset()
		inputsDetails.name = ''
		inputsDetails.email = ''
		inputsDetails.phoneNumber = ''
		inputsDetails.message = ''
		checkInputs()
	}
}

//checking that contact section in on screen
const animationStart = ref(false)
onMounted(() => {
	const contact = document.querySelector('.contact')

	document.addEventListener('scroll', () => {
		if (contact.offsetTop <= window.scrollY + window.innerHeight - 150) {
			animationStart.value = true
		} else {
			animationStart.value = false
		}
	})
})
</script>

<style lang="scss" scoped>
.active {
	transform: translateY(-170%);
	color: #fff;
}
.textarea-active {
	transform: translateY(-100%);
	color: #fff;
}

.animation {
	h2,
	.input-box,
	button {
		transform: translateY(0);
		opacity: 1;
		transition: transform 1.5s, opacity 1.5s;
	}

	.first {
		transition-delay: 100ms;
	}
	.second {
		transition-delay: 200ms;
	}
	.third {
		transition-delay: 300ms;
	}
	.fourth {
		transition-delay: 400ms;
	}

	button {
		transition-delay: 500ms;
	}
}

.inputError {
	border: 2px solid rgb(225, 29, 72);
	border-radius: 6px;
	box-shadow: 0 5px 10px rgb(225, 29, 72);
	margin-bottom: 5px;
}
</style>
