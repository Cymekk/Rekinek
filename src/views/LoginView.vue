<template>
	<LoginRegisterResetFormComponent title="Logowanie">
		<template #form>
			<div>
				<label class="block text-white font-bold text-center tracking-[1px]">Email</label>
				<div class="input-box relative rounded-md">
					<input
						type="text"
						class="w-full focus:outline-none p-[5px] pl-[35px] rounded-md"
						v-model="credentials.email"
					/>

					<img src="../assets/Icons/at.svg" alt="user icon" class="absolute left-[5px] top-1/2 -translate-y-1/2" />
				</div>
			</div>

			<div>
				<label class="block text-white font-bold text-center tracking-[1px]">Hasło</label>
				<div class="input-box relative rounded-md">
					<input
						type="password"
						class="w-full focus:outline-none p-[5px] pl-[35px] rounded-md"
						v-model="credentials.password"
					/>

					<img src="../assets/Icons/lock.svg" alt="user icon" class="absolute left-[5px] top-1/2 -translate-y-1/2" />
				</div>
			</div>
			<button
				class="px-8 py-4 bg-[#C2D9FF] mx-auto block rounded-md text-[#214580] font-medium hover:bg-[#214580] hover:text-[#C2D9FF] transition-colors duration-500"
				@click="login"
			>
				Zaloguj
			</button>
		</template>
	</LoginRegisterResetFormComponent>
</template>

<script setup>
//imports
import { onMounted, reactive } from 'vue'
import { useStoreAuth } from '../stores/storeAuth'
import { useStoreNotes } from '../stores/storeNotes'
import LoginRegisterResetFormComponent from '../components/LoginRegisterResetFormComponent.vue'

//stores
const storeAuth = useStoreAuth()
const storeNotes = useStoreNotes()

storeAuth.init()

//reactive variable string inputs values
const credentials = reactive({
	email: '',
	password: '',
})

const login = () => {
	storeAuth.login(credentials)
}

onMounted(() => {
	storeNotes.getNotes()
})
</script>

<style lang="scss" scoped>
.label {
	transition: transform 0.3s ease, color 0.3s ease;
}
.active {
	color: #fff;
	transform: translate(-50%, -110%);
}
</style>
